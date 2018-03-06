import React, { Component } from "react";
import * as R from "ramda";
/**
 * Stylesheet
 */
const stylesheet = {
  bordered: {
    border: {
      type: "line"
    },
    style: {
      border: {
        fg: "green"
      }
    }
  }
};
export default ({ data: { event, refetch }, currentTab, tabSelection }) => {
  return (
    <element>
      <ContentContainer
        event={event}
        tabSelection={tabSelection}
        currentTab={currentTab}
      />
      <Tabs
        currentTab={currentTab}
        tabSelection={tabSelection}
        refetch={refetch}
      />
    </element>
  );
};

const ContentContainer = ({ currentTab, ...rest }) => {
  const Tab = _getTab(currentTab);
  return (
    <box
      label={currentTab}
      class={stylesheet.bordered}
      width="100%"
      height="80%"
      scrollable={true}
    >
      <Tab {...rest} />
    </box>
  );
};

const _getTab = currentTab => {
  switch (currentTab) {
    case "About":
      return About;
    case "Talks":
      return Talks;
    case "Stats":
      return Stats;
    default:
      return About;
  }
};
const About = ({ event = {} }) => (
  <text class={stylesheet.bordered} width="100%" height="100%">
    {event.description}
  </text>
);

const _avStars = (totalStars, totalDevices) =>
  totalDevices > 0 ? totalStars / totalDevices : 0;

const _talkStats = (talks = [], refetch) =>
    talks.map(
      (talk, i) =>
          // `${talk.title} - ${_avStars(
          //   talk.totalStars,
          //   talk.totalDevices
          // )} out of ${talk.totalDevices}`
          <Progress key={`talk-${talk.id}`} index={i} label={talk.title} totalStars={talk.totalStars} totalDevices={talk.totalDevices}/>
      );

const Stats = ({ event = {} }) => (
  <box class={stylesheet.bordered} width="100%" height="100%">
    {_talkStats(event.talks)}
{/*    <list
      class={{
        border: { type: "line" },
        style: { border: { fg: "blue" } }
      }}
      style={{
        selected: { fg: "green", bg: "black" }
      }}
      interactive={false}
      mouse={false}
      height="100%"
      clickable={false}
      keys={false}
      items={_talkStats(event.talks)}
    />*/}
  </box>
);

const _talkTitles = talks => talks.map(talk => talk.title);

const _talkForTitle = (talks = [], talkTitle) =>
  R.find(R.propEq("title", talkTitle))(talks);
class Talks extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedTalk: undefined };
  }
  render() {
    const { event = {}, tabSelection } = this.props;
    const talk = _talkForTitle(event.talks, this.state.selectedTalk);
    return (
      <box>
        <list
          class={{
            border: { type: "line" },
            style: { border: { fg: "blue" } }
          }}
          style={{
            selected: { fg: "green", bg: "black" }
          }}
          interactive={true}
          mouse={true}
          height="50%"
          clickable={true}
          keys={true}
          items={_talkTitles(event.talks)}
          onSelect={props => {
            this.setState({ selectedTalk: props.content });
          }}
        />
        <box
          class={{
            border: { type: "line" },
            style: { border: { fg: "blue" } }
          }}
          scrollable={true}
          top="50%"
          height="50%"
        >
          <text>{talk && talk.description}</text>
        </box>
      </box>
    );
  }
}

const Talk = talk => (
  <box>
    <text>{talk.title}</text>
    <text>{talk.description}</text>
  </box>
);

const Tabs = ({ currentTab, tabSelection, refetch }) => (
  <box
    label="Tabs"
    class={stylesheet.bordered}
    top="80%"
    width="100%"
    height="20%"
  >
    <TabButton
      width="25%"
      label="About"
      text="About"
      tabSelection={tabSelection}
    />
    <TabButton
      width="25%"
      left="33%"
      label="Talks"
      text="Talks"
      tabSelection={tabSelection}
    />
    <TabButton
      width="25%"
      left="66%"
      label="Stats"
      text="Stats"
      refetch={refetch}
      tabSelection={tabSelection}
    />
  </box>
);

class TabButton extends Component {
  render() {
    const { label, text, width, left, tabSelection, refetch} = this.props;
    let interval;
    return (
      <box
        mouse={true}
        clickable={true}
        keys={true}
        onClick={() => {
          tabSelection(label);
          if( refetch) {
            interval && clearInterval(interval);
            interval = setInterval(() => {
              refetch();
            }, 2000);
          }
        }}
        label={label}
        class={stylesheet.bordered}
        width={width}
        left={left}
      >
        {text}
      </box>
    );
  }
}

class Progress extends Component {
  constructor(props) {
    super(props);

    this.state = {color: 'blue'};
  }

  render() {
    const {index, label, totalStars, totalDevices} = this.props;
    const progress = ( totalStars / totalDevices ) * (100 / 5);
    const top = `${index * 10}%`;
    const title = `${label} - votes ${totalDevices}, total stars ${totalStars}`
    return <progressbar label={title}
                        onComplete={() => this.setState({color: 'green'})}
                        class={stylesheet.bordered}
                        filled={progress}
                        top={top}
                        width="90%"
                        height="10%"
                        style={{bar: {bg: this.state.color}}} />;
  }
}
