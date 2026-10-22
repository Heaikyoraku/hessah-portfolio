# Emora

**Multimodal AI for Arabic-speaking children** · Graduation project · Team project · 2026

## The idea

Emora explored how AI can help children express and interact with emotions through creative, Arabic-first content. The system combines **brain signals (EEG)** and **eye tracking**, predicts an emotion category, and uses the result to generate a personalized experience.

## System at a glance

```text
EEG + eye-tracking signals
          |
          v
    Signal processing
          |
          v
 Emotion recognition
          |
          +--> Personalized Arabic stories
          +--> Generated artwork
          +--> Arabic voice content
```

## Research and evaluation

- The emotion-recognition experiment considered **7 emotion classes**.
- The team used **leave-one-subject-out (LOSO)** evaluation to assess generalization to unseen participants.
- Reported mean classification accuracy was **45.06%** in that evaluation setting.

This number is an experimental classification result, not a clinical or user-outcome metric. Performance should be interpreted in the context of the seven-class, subject-independent task.

## Tools and approach

The system brings together biosignal processing, machine learning, and generative AI for Arabic stories, illustrations, and audio. The project's focus is the multimodal pipeline and its human-centered use case.

## Project attribution

Emora was developed as a **team graduation project** in B.Sc. Artificial Intelligence Sciences at Princess Nourah bint Abdulrahman University.

The public overview describes the research concept and reported findings; it does not claim individual ownership of all components or distribute participant data. A separate public code repository will be considered only after material and sharing rights are checked.
