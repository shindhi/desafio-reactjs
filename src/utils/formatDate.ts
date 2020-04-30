const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('pt-BR').format(new Date(date));
};

export default formatDate;
