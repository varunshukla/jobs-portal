import React, { useEffect, useState } from 'react';
import { map } from 'lodash';
import { Card } from '../common/Card';

const data = [
  {
    title: "Designer",
    description: "lkdsjf sgsh fsd afbgekjfbf adj  fefgejf fgsef ffjhw rwemfef wegfwef wefwefjw das sh asdhs a bjhfas dwkgc asasasf ajfgfh ff fjfafbasjhfg s",
    location: "Gurgaon",
    showAction: true,
    actionText: "Apply"
  }, {
    title: "DesignerAA",
    description: "lkdsjf sgsh fsd afbgekjfbf adj  fefgejf fgsef ffjhw rwemfef wegfwef wefwefjw das sh asdhs a bjhfas dwkgc asasasf ajfgfh ff fjfafbasjhfg s",
    location: "Gurgaon",
    showAction: true,
    actionText: "Apply"
  }, {
    title: "Akjk",
    description: "lkdsjf sgsh fsd afbgekjfbf adj  fefgejf fgsef ffjhw rwemfef wegfwef wefwefjw das sh asdhs a bjhfas dwkgc asasasf ajfgfh ff fjfafbasjhfg s",
    location: "Gurgaon",
    showAction: true,
    actionText: "Apply"
  }, {
    title: "skjdh",
    description: "lkdsjf sgsh fsd afbgekjfbf adj  fefgejf fgsef ffjhw rwemfef wegfwef wefwefjw das sh asdhs a bjhfas dwkgc asasasf ajfgfh ff fjfafbasjhfg s",
    location: "Gurgaon",
    showAction: true,
    actionText: "Apply"
  }, {
    title: "sdsfkjsdhf",
    description: "lkdsjf sgsh fsd afbgekjfbf adj  fefgejf fgsef ffjhw rwemfef wegfwef wefwefjw das sh asdhs a bjhfas dwkgc asasasf ajfgfh ff fjfafbasjhfg s",
    location: "Gurgaon",
    showAction: true,
    actionText: "Apply"
  },
];

export const OpenJobs = () => {
  const [openjobs, setopenjobs] = useState(data)

  useEffect(() => {
    // api call for open job
    setopenjobs(data);
    
  }, [openjobs])

  const actionCta = (job) => {
    // apply for job
    console.log(job);
  }

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <span className="material-icons material-icons-outlined blue homeiconsize">
              home
            </span>
            Home
          </li>
        </ol>
      </nav>
      <div style={{
        font: 'normal normal bold 22px/27px Helvetica Neue',
        color: '#FFFFFF',
        opacity: 1,
      }} className="my-4">
        Jobs for you 
      </div>
      <div className="row">
        {
          map(openjobs, (eachJob) => {
            return (
              <Card
                title={eachJob.title}
                description={eachJob.description}
                location={eachJob.location}
                showAction={true}
                actionCta={actionCta}
                actionText="Apply"
              />
            );
          })
        }
      </div>
    </div>
  );
};