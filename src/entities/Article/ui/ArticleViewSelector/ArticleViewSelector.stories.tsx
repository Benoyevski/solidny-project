import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleView } from '../../model/types/article';
import { ArticleViewSelector } from './ArticleViewSelector';

export default {
    title: 'entities/Article/ArticleViewSelector',
    component: ArticleViewSelector,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleViewSelector>;

const Template: ComponentStory<typeof ArticleViewSelector> = (args) => <ArticleViewSelector {...args} />;

export const List = Template.bind({});
List.args = {
    view: ArticleView.SMALL,
};

export const Tiled = Template.bind({});
Tiled.args = {
    view: ArticleView.BIG,
};
