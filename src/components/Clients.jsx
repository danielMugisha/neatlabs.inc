import React from 'react';
import './Clients.css';

export function Clients() {
  const clients = [
    { name: 'Reddit', logo: '/clients/reddit.svg' },
    { name: 'Discord', logo: '/clients/discord.svg' },
    { name: 'Netflix', logo: '/clients/netflix.svg' },
    { name: 'Envato', logo: '/clients/envato.svg' },
    { name: 'Google Play', logo: '/clients/google-play.svg' },
    { name: 'Upwork', logo: '/clients/upwork.svg' },
  ];

  return (
    <section className="clients">
      <div className="container">
        <div className="clients__content">
          <div className="clients__carousel">
            <div className="clients__track">
              {[...clients, ...clients].map((client, index) => (
                <div key={index} className="client__logo">
                  <div className="client__placeholder">
                    {client.name.charAt(0)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
