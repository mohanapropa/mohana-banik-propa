import React from 'react'
import './Achievement.css'
import AchievementCard from '../components/AchievementCard'

const Achievements = () => {
  const data = [
    {
      paper_name:
        'A Fruit Cultivation Recommendation System Based on Pearson Correlation Coefficient',
      source_link:
        'https://ieeexplore.ieee.org/document/9396923',
      description:
        'Based on the Pearson Correlation Coefficient, we developed a system that recommends fruits to its consumers.',
      author: ['Dr. M Shamim Kaiser', 'Mohana Banik Propa', 'Sajarun Sadia', 'Anim Shihab']
    }
  ]
  const contest = 
      ['Participation of ACM ICPC Dhaka Preliminary Contest 2017.',
      'Participation of ACM ICPC Dhaka Preliminary Contest 2018.',
      'Participation of CUET NCPC-2017, Team Name: BUP_Invincible_Trio.',
      'Participation of NGPC 2017 Preliminary Contest on 8th April, 2017, Team Name: BUP_Propa.',
      'Participation of NGPC Final Contest 2017, Team Name: BUP_Propa.',
      'Participation in Inter College Science Fair in Sylhet Division (2014), Smart city Model || Runner up.']

  


  return (
    <div className="achievements" id="achievements">
      <h1 className="title projects-title">Achievement Highlights</h1>
      <div className="achievements-container">
        
        {data.map((data, id) => (
          <AchievementCard
            key={id}
            title={data.paper_name}
            description={data.description}
            author={data.author}
            link={data.source_link}
          />
        ))}
      </div>
      <div className="spacer"></div>
      <div className="achievements-container participation">
    {contest.map((contest, id) => (
      <li key={id}>{contest}</li>
    ))}
   
      </div>
    </div>
  )
}

export default Achievements
