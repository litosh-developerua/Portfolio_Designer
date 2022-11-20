import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Footer } from 'components/Footer';
import { Heading } from 'components/Heading';
import { Icon } from 'components/Icon';
import { Input } from 'components/Input';
import { Meta } from 'components/Meta';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { tokens } from 'components/ThemeProvider/theme';
import { Transition } from 'components/Transition';
import { useFormInput } from 'hooks';
import { useRef, useState } from 'react';
import { cssProps, msToNum, numToMs } from 'utils/style';
import styles from './Contact.module.css';
import linkedin from '../../assets/links/linkedin.svg';
import emailIcon from '../../../src/assets/links/mail.svg';
import phone from '../../assets/links/phone.svg';
import telegram from '../../assets/links/telegram.svg';


export const Contact = () => {
  const errorRef = useRef();
  const email = useFormInput('');
  const message = useFormInput('');
  const [sending, setSending] = useState(false);
  const [complete, setComplete] = useState(false);
  const [statusError, setStatusError] = useState('');
  const initDelay = tokens.base.durationS;


//   const onSubmit = async event => {
//   //   event.preventDefault();
//   //   setStatusError('');

//   //   if (sending) return;

//   //   try {
//   //     setSending(true);

//   //     const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/message`, {
//   //       method: 'POST',
//   //       mode: 'cors',
//   //       headers: {
//   //         'Content-Type': 'application/json',
//   //       },
//   //       body: JSON.stringify({
//   //         email: email.value,
//   //         message: message.value,
//   //       }),
//   //     });

//   //     const responseMessage = await response.json();

//   //     const statusError = getStatusError({
//   //       status: response?.status,
//   //       errorMessage: responseMessage?.error,
//   //       fallback: 'There was a problem sending your message',
//   //     });

//   //     if (statusError) throw new Error(statusError);

//   //     setComplete(true);
//   //     setSending(false);
//   //   } catch (error) {
//   //     setSending(false);
//   //     setStatusError(error.message);
//   //   }
//   // };

  return (
    <Section className={styles.contact}>
      <div className={styles.wraper}>
        <a href="mailto:kristinalitos@gmail.com" className={styles.item}>
          <h2> Email: kristinalitos@gmail.com </h2>
        </a>
        <a href='https://t.me/christinashevtsova' className={styles.item}>
          <h2>
          Telegram: @christinashevtsova
          </h2>
        </a>
        <a href="tel:+380992745180" className={styles.item}>
          <h2>
          Phone: +380992745180
          </h2>
        </a>
        <a href = 'https://www.linkedin.com/in/christina-shevtsova-552b9120b/'className={styles.item}>
          <h2>
          Linkindin
          </h2>
        </a>
      </div>
      <Footer className={styles.footer} />
    </Section>
  );
};

function getStatusError({
  status,
  errorMessage,
  fallback = 'There was a problem with your request',
}) {
  if (status === 200) return false;

  const statuses = {
    500: 'There was a problem with the server, try again later',
    404: 'There was a problem connecting to the server. Make sure you are connected to the internet',
  };

  if (errorMessage) {
    return errorMessage;
  }

  return statuses[status] || fallback;
}

function getDelay(delayMs, offset = numToMs(0), multiplier = 1) {
  const numDelay = msToNum(delayMs) * multiplier;
  return cssProps({ delay: numToMs((msToNum(offset) + numDelay).toFixed(0)) });
}
