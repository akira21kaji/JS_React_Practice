type GreetingProps = {
  name: string;
  age: number;
};

export default function Greeting({ name, age }: GreetingProps) {
  return (
    <h1>
      Hello,{name}! You are {age} years old.
    </h1>
  );
}
