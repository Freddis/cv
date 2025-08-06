import {FC} from 'react';
import {Heading1} from '../../elements/Heading1';


export const Home: FC = () => {
  return (
    <div className="flex w-full justify-center items-center bg-main text-on-main">
      <div className="max-w-3xl">
        <Heading1>Alex Sarychev</Heading1>
        <h2>Full-Stack Web Developer</h2>
        <div>
          I am a Full-Stack Web Developer & Web Designer based in The USA, but working Worldwide.
          I am passionate about designing and developing user-friendly websites. I have all the skills to create a new high quality
          website or improve existing websites for individuals and organisations, using the latest techniques and trends.
        </div>
      </div>
    </div>
  );
};
