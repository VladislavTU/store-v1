import { useState } from 'react';
import styles from './contacts.module.css';

const Contacts = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [question, setQuestion] = useState('');
  return (
    <div className="container">
      <div className={styles.formContainer}>
        <form className={styles.aboutForm}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
          <textarea
            id="question"
            name="question"
            rows={5}
            placeholder="Your question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
