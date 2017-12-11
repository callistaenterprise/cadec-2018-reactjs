import AWS from "aws-sdk";
import R from "ramda";

export async function wrapCallback(event, callback, fn) {
  try {
    const result = await fn(event);
    console.log("---- callback result", JSON.stringify(result, null, 2));
    callback(null, result);
  } catch (e) {
    callback(e, null);
  }
}

export async function wrapReducerCallback(event, callback, fn) {
  try {
    console.log(event);
    const result = await fn(R.pathOr({}, ["body", "action"], event));
    console.log(
      "---- reducer callback result",
      JSON.stringify(result, null, 2)
    );
    callback(null, result);
  } catch (e) {
    callback(e, null);
  }
}

export const baseLambda = service =>
  async function(event, context, callback) {
    console.log("--- message event", JSON.stringify(event, null, 2));
    // pass the event through the reducer
    wrapCallback(event, callback, service);
  };

const promiseCb = (resolve, reject) => (err, data) => {
  if (err)
    reject(err); // console.log(err, err.stack); // an error occurred
  else resolve(data);
};

// FunctionName is the name of the env var in the serverless.yml file
export async function invokeLambda(FunctionName, event, context) {
  if (process.env.IS_OFFLINE) {
    return new Promise((resolve, reject) =>
      require.ensure([], require =>
        FunctionName(
          event,
          context,
          promiseCb(resolve, reject)
        )
      )
    );
  } else {
    const lambda = new AWS.Lambda();
    const params = {
      FunctionName,
      Payload: JSON.stringify(event)
    };
    console.log("--- invoke lambda", JSON.stringify(params, null, 2));
    return new Promise((resolve, reject) =>
      lambda.invoke(params, promiseCb(resolve, reject))
    );
  }
}
