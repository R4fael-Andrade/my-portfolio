import { useState, useEffect } from "react";

const roles = ["Quality Analyst", "Developer"];
const TYPING_SPEED = 150; // tempo entre cada letra em ms
const DELETING_SPEED = 100; // tempo para apagar cada letra
const PAUSE_TIME = 1500; // pausa após completar a palavra

const TypewriterText = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: any;

    const currentRole = roles[roleIndex];
    
    if (!isDeleting && text.length < currentRole.length) {
      // digitando
      timeout = setTimeout(() => {
        setText(currentRole.slice(0, text.length + 1));
      }, TYPING_SPEED);
    } else if (isDeleting && text.length > 0) {
      // apagando
      timeout = setTimeout(() => {
        setText(currentRole.slice(0, text.length - 1));
      }, DELETING_SPEED);
    } else if (!isDeleting && text.length === currentRole.length) {
      // pausar antes de apagar
      timeout = setTimeout(() => setIsDeleting(true), PAUSE_TIME);
    } else if (isDeleting && text.length === 0) {
      // mudar para a próxima palavra
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <h2 className="text-2xl mt-2 font-semibold flex justify-center md:justify-start items-center">
      I'm a&nbsp;<span className="border-r-2 text-purple-600 border-blue-500 pr-1 animate-pulse">{text}</span>
    </h2>
  );
};

export default TypewriterText;
