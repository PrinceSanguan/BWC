import styles from './TeamSection.module.css';

type TeamMember = {
  name: string;
  role: string;
  initials: string;
};

const team: TeamMember[] = [
  { name: 'Alex Smith', role: 'Founder', initials: 'AS' },
  { name: 'Jamie Lee', role: 'Lead Technician', initials: 'JL' },
  { name: 'Morgan Ray', role: 'Customer Care', initials: 'MR' },
  { name: 'Taylor Kim', role: 'Technician', initials: 'TK' },
];

export default function TeamSection() {
  return (
    <section className={styles.teamSection} aria-label="Our Team">
      <h2>
        <span className={styles.teamTitle}>Meet the</span>
        <span className={styles.teamTitle}> Team</span>
      </h2>
      <div className={styles.teamGrid}>
        {team.map((member, i) => (
          <div className={styles.teamCard} key={i}>
            <div className={styles.teamAvatar}>{member.initials}</div>
            <div className={styles.teamName}>{member.name}</div>
            <div className={styles.teamRole}>{member.role}</div>
            <div><button className={styles.teamButton}>Contact</button></div>
          </div>
        ))}
      </div>
    </section>
  );
}
