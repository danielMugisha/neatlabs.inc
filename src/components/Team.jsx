import React from 'react';
import './Team.css';

export function Team() {
  const members = [
    { name: 'Sarah Chen', role: 'Creative Director', avatar: 'SC' },
    { name: 'Marcus Rodriguez', role: 'Lead Developer', avatar: 'MR' },
    { name: 'Emma Thompson', role: 'UX Strategist', avatar: 'ET' },
    { name: 'David Kim', role: 'Brand Specialist', avatar: 'DK' }
  ];

  return (
    <section id="team" className="team">
      <div className="container">
        <div className="team__header">
          <span className="section-label">Meet the Team</span>
          <h2 className="section-title">Creative minds behind the magic</h2>
        </div>
        
        <div className="team__grid">
          {members.map((member, index) => (
            <div key={index} className="team-member">
              <div className="member__avatar">
                {member.avatar}
              </div>
              <h3 className="member__name">{member.name}</h3>
              <p className="member__role">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
