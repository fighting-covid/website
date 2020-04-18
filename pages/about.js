import { useRouter } from 'next/router';
const yaml = require('js-yaml');
const fs = require('fs');
import path from 'path'

const NameTag = ({name}) => {
  return (
    <h4>{name}</h4>
  )
}

const GroupTag = ({groupName, people}) => {
  return (
    <div>
      <h2>{groupName}</h2>
      {people.map(person => (
        <NameTag name={person} />
      ))}
    </div>
  )
} 

const AboutPage = ({peopleData}) => {
  return (
    <div>
      {Object.keys(peopleData).map(group => (
        <GroupTag groupName={group} people={peopleData[group]} />
      ))}
    </div>
  );
}
export async function getStaticProps(){
  const peoplePath = path.join(process.cwd(), "userdata.yaml")
  const peopleData = yaml.safeLoad(fs.readFileSync(peoplePath))
  return {props: {peopleData}};
}

export default AboutPage