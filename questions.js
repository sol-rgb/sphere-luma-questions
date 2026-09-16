/*
 * Ground Truth · Table Talk — question deck
 *
 * HOW TO UPDATE WITH THE REAL LUMA QUESTIONS:
 * 1. Open the Luma export (Excel/CSV) and copy the question column.
 * 2. Replace the strings in QUESTIONS below, one question per line, in quotes, comma after each.
 * 3. Set PLACEHOLDER to false so the "sample questions" notice disappears.
 * 4. Redeploy (or ask Claude/Sol to). Nothing else needs to change.
 */

const PLACEHOLDER = true;

const QUESTIONS = [
  "What is the most \"good enough\" system your team has shipped that still keeps you up at night?",
  "Where does human review genuinely catch things in your pipeline, and where is it theater?",
  "What would you automate tomorrow if the regulator disappeared, and why has nobody let you?",
  "What is a benchmark score you have stopped trusting, and what replaced it?",
  "Everyone at this table works near a zero-margin-for-error domain. What was your closest near miss?",
  "When a model and a domain expert disagree, who wins at your company, and who should?",
  "What is the least glamorous piece of infrastructure that actually keeps your product compliant?",
  "Is domain depth a real moat, or does it just delay the inevitable? Defend one side.",
  "What is something your eval set says is fine that you know is not?",
  "If you could see one competitor's incident postmortems, whose would you pick?",
  "What did you believe about human-in-the-loop design a year ago that you no longer believe?",
  "What is the wrong answer your product could give that scares you most?",
  "Which regulation, honestly, made your product better?",
  "What do you wish lawyers understood about models, and what do you wish engineers understood about the law?",
  "Whose Approve button is real oversight, and whose is legal cover? How do you tell?",
  "What is a technical bet your team made against the consensus that is starting to pay off?",
  "If your whole compliance stack vanished tonight, what would you rebuild first tomorrow?",
  "What part of your job do you think a model does better than you already, and have you admitted it out loud?",
  "What question did you put in your own RSVP, and has today answered it yet?",
  "What is the hardest thing you have had to explain to an auditor?",
];
