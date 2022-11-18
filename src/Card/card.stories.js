import React from "react";
import MediaCard from "./card";

export default{
    title:"Media Card",
    componenet:MediaCard
}

const Template = (args) => <MediaCard {...args} />

export const media_card = Template.bind({})