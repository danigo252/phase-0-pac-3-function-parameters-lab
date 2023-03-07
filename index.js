function introduction(name)
{
  return `Hi, my name is ${name}.`;
}

function logTwoValues(value1, value2)
{
  return `The two values are ${value1} and ${value2}.`;
}

function introductionWithLanguage(name, language)
{
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

function introductionWithLanguageOptional(name, language = "JavaScript")
{
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

function sayHelloTo(firstName = "User")
{
  return `Hello, ${firstName}!.`;
}

