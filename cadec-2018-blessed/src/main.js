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
        fg: "blue"
      }
    }
  }
};
export default ({ data: { event }, currentTab, tabSelection }) => {
  return (
    <element>
      <ContentContainer
        event={event}
        tabSelection={tabSelection}
        currentTab={currentTab}
      />
      <Tabs currentTab={currentTab} tabSelection={tabSelection} />
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
    default:
      return About;
  }
};
const About = ({ event = {} }) => (
  <text class={stylesheet.bordered} width="100%" height="100%">
    {event.description}
  </text>
);

const _talkTitles = talks => talks.map(talk => talk.title);

const _talkForTitle = (talks = [], talkTitle) => R.find(R.propEq("title", talkTitle))(talks);
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
          onSelect={
            props => {
              this.setState({ selectedTalk: props.content });
            }
          }
        />
        <box
          class={{
            border: { type: "line" },
            style: { border: { fg: "blue" } }
          }}
          scrollable={true}
          top="50%"
          height="50%">
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

const Tabs = ({ currentTab, tabSelection }) => (
  <box
    label="Tabs"
    class={stylesheet.bordered}
    top="80%"
    width="100%"
    height="20%"
  >
    <TabButton
      width="40%"
      label="About"
      text="About"
      tabSelection={tabSelection}
    />
    <TabButton
      width="40%"
      left="50%"
      label="Talks"
      text="Talks"
      tabSelection={tabSelection}
    />
  </box>
);

class TabButton extends Component {
  render() {
    const { label, text, width, left, tabSelection } = this.props;
    return (
      <box
        mouse={true}
        clickable={true}
        keys={true}
        onClick={() => {
          tabSelection(label);
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
