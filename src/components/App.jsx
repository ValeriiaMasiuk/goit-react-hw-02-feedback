import React from 'react';
import Statistics from './Feedbacks/Statistics/Statistics';
import FeedbackOptions from './Feedbacks/Controls/Controls';
import Section from './Feedbacks/Section/Section';
import NotificationMessage from './Feedbacks/NotificationMessage/NotificationMessage'

class App extends React.Component {
      state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

    onLeaveFeedback = (evt) => {
        const name = evt.currentTarget.name
        this.setState(prevState => {
            return { [name]: prevState[name] + 1 };
        });
    }

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        const total = good + neutral + bad;
        return total
    }
    countPositiveFeedbackPercentage = total => {
        const { good } = this.state;
        if (total === 0) {
            return 0;
        }
        const percentage = (good * 100) / total;
        return Math.round(percentage)
    }

    render() {
        const options = Object.keys(this.state);
        const total = this.countTotalFeedback();
        const percent = this.countPositiveFeedbackPercentage(total)

        return (
          <div
            style={{
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: 40,
              color: '#010101'
            }}>
            <Section title="Please, leave your feedback">
                <FeedbackOptions
                    options={options}
                    onLeaveFeedback={this.onLeaveFeedback}
                />
            </Section>

            <Section title="Statistics">
              {total !== 0 ? 
              <Statistics
                    good={this.state.good}
                    neutral={this.state.neutral}
                    bad={this.state.bad}
                    total={total}
                  positivePercentage={percent} />
                : 
                <NotificationMessage
                  message="There is no feedback"/>}
                
                </Section>
            </div>
        )
    }
};


export default App

// Созданы репозитории goit-react-hw-02-feedback и goit-react-hw-02-phonebook.
// При сдаче домашней работы есть две ссылки: на исходные файлы и рабочие страницы каждого задания на GitHub Pages.
// При запуске кода задания, в консоли нету ошибок и предупреждений.
// Для каждого компонента есть отдельный файл в папке src/components.
// Для компонентов описаны propTypes.
// Все что компонент ожидает в виде пропсов, передается ему при вызове.
// JS-код чистый и понятный, используется Prettier.
// Стилизация выполнена CSS-модулями или Styled Components.