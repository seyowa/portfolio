export const replacePlaceholders = (text) => {
    if (!text) return '';
  const currentYear = new Date().getFullYear();
  
    return text
      .replace('[Firstname]', 'Seye')
      .replace('[Lastname]', 'Omowa')
      .replace('[My Occupation]', 'Web Developer')
      .replace('[Headline goes here]', 'Eager to bring ideas to life')
      .replace('[Headline Continues here]', 'Let\'s create something amazing!')
      .replace('[Current Year]', currentYear)
      .replace('[Your detailed bio goes here]', 'I am a passionate web developer with a knack for creating stunning web experiences.')
      .replace('[Detailed descriptions of your projects go here]', 'Here are some of the projects I have worked on.')
      .replace('[Your contact information goes here]', 'Feel free to reach out via email at seye@example.com.')
  };
  

