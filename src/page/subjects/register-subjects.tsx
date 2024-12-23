import { IconEdit, IconTrash } from "@tabler/icons-react";
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
  const [EditMode, setEditMode] = useState<Number>(0);
  const [UserSubjects, setUserSubjects] = useState<SubjectItem[]>([]);
  
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
      <Navbar route="none" />
      <div className="flex justify-between px-48">
        <div className="flex flex-col gap-4">
          <form className="flex flex-col gap-8 max-w-[400px]">
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
                  <input className="input-component w-48 secondary-color" placeholder="ex. Importante" type="text" name="priority" id="priority" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="hour">Horas no ciclo:</label>
                  <input className="input-component w-48 secondary-color" placeholder="ex. 8h" type="number" name="hour" id="hour" />
                </div>
              </div>
            <button className="button-component tertiary-color" type="submit">{EditMode == 0 ? 'Adicionar ao ciclo' : 'Atualizar'}</button>
          </form>
          { EditMode == 0 ?
            <button onClick={() => navigate('/home')} className="button-component secondary-hover" type="button">Concluir</button>
            :
            <button onClick={() => setEditMode(0)} className="button-component hover-color" type="button">Voltar</button>
          }
        </div>
        <ul className="flex flex-col gap-4 w-[460px] max-h-[620px] overflow-y-auto">
          <p className="ml-auto">Carga de horas do ciclo: 48hr</p>
          {UserSubjects &&
            UserSubjects.map((Subject) => (
              <li key={Subject.id} className="list-container show-hover-container hover-primary">
                <h3 className="after-hour">{Subject.hour}</h3>
                <h4 className="truncate font-medium">{Subject.name}</h4>
                {EditMode == Subject.id ?
                  <button className="show-hover list-button hover:text-red-700" type="button" onClick={() => setEditMode(Subject.id)}><IconTrash size={26} /></button>
                  :
                  <button className="show-hover list-button" type="button" onClick={() => setEditMode(Subject.id)}><IconEdit size={26} /></button>
                }
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default RegisterSubjects;
