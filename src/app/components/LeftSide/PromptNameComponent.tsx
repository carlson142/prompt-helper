type Props = {
  title: string;
  id: string;
};

export const PromptNameComponent: React.FC<Props> = (props) => {
  console.log(props);

  return <div>{props.title}</div>;
};
