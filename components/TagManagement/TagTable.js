import React, { useEffect } from "react";
import { Table, Tag, Space, Typography } from "antd";
import TagSelect from "../Form/Input/TagSelect";
import { TagStyle } from '../VTheme/VTheme'
import AliasDisplay from './AliasDisplay'
import { EditableTagCell } from "./EditableTagCell";

const dataSource = [
  {
    key: "1",
    tag: "programming",
    aliases: ["development", "coding"],
    action: "x",
  },
  {
    key: "2",
    tag: "development",
    aliases: ["programming", "coding"],
    action: "x",
  },
  {
    key: "3",
    tag: "coding",
    aliases: ["programming", "development"],
    action: "x",
  },
];

const columns = [
  {
    title: "Tag",
    dataIndex: "tag",
    key: "tag",
  render: tag => (<EditableTagCell tag={tag}/>)
  },
  {
    title: "Aliases",
    dataIndex: "aliases",
    key: "aliases",
    render: aliases => (<AliasDisplay tags={aliases}/>
    )
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    render: (action) => (<div>         
    <a style={{paddingRight: "1em"}}>Edit</a>
    <a>Remove tag</a>
    </div>)
  },
];

export const TagTable = (props) => {
  return <Table dataSource={dataSource} columns={columns} />;
};
