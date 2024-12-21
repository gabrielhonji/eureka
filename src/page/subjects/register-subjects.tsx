import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "../../components/navbar";

interface SubjectItem {
  id: number,
  name: string,
  priority: number,
  hour: number,
};

function RegisterSubjects() {
  const [EditMode, setEditMode] = useState<Boolean>(false);
  const [UserSubjects, setUserSubjects] = useState<SubjectItem[]>([]);
  const [CycleHours, setCycleHours] = useState<Number>(0)
  
  const navigate = useNavigate();
  
  const SubjectItems: SubjectItem[] = [
    {id: 1, name: 'Matemática', priority: 5, hour: 15},
    {id: 2, name: 'Língua Portuguesa', priority: 3, hour: 7},
    {id: 3, name: 'Física', priority: 4, hour: 11},
    {id: 4, name: 'Química', priority: 4, hour: 11},
    {id: 5, name: 'Inglês', priority: 2, hour: 2},
  ];

  useEffect(() => {
    setUserSubjects(SubjectItems);
  }, [])
  
  return (
    <div className="content">
      <Navbar />
      <div className="flex justify-center gap-72">
        <form className="flex flex-col gap-8">
          <div>
            <h1>Matérias</h1>
            <p>Adicione suas matérias ao ciclo</p>
          </div>
            <div className="flex flex-col">
              <label htmlFor="subject">Matéria:</label>
              <input className="input-component secondary-color" placeholder="ex. Matemática" type="text" name="subject" id="subject" />
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col">
                <label htmlFor="priority">Prioridade:</label>
                <input className="input-component secondary-color" placeholder="ex. Importante" type="text" name="priority" id="priority" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="hour">Horas no ciclo:</label>
                <input className="input-component secondary-color" placeholder="ex. 8h" type="text" name="hour" id="hour" />
              </div>
            </div>
          <button className="button-component tertiary-color" type="submit">Adicionar ao ciclo</button>
        </form>
        <ul className="flex flex-col gap-4 w-[460px]">
          <p className="ml-auto">Carga de horas do ciclo: 48hr</p>
          {UserSubjects &&
            UserSubjects.map((Subject) => (
              <li key={Subject.id} className="list-container hover-primary">
                <h3 className="after-hour">{Subject.hour}</h3>
                <h4 className="truncate font-medium">{Subject.name}</h4>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default RegisterSubjects;
