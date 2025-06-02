import type { JSX } from "react";

export default function SpaceMission():JSX.Element {
    const shipName: string = 'Apollon 11';
    const crewCount: number = 3;
    const missionStarted: boolean = true;
    const crewNames: string[] = ['Нил Армстронг', 'Майкл Коллинз', 'Базз Олдрин'];
    const captain:[string, number] = ['Нил Армстронг ', 35,];
    const startMission = (name: string): string => {
        return `miision ${name} started`
    }
    return (
        <div>
            <h1>{shipName}</h1>
            <h3>{`капитан: ${captain[0]}`}</h3>
            <p>{`количество членов экипажа: ${crewCount}`}</p>
            <ul>
                {crewNames.map( (name, index) => (
                    <li key = {index}>{name}</li>
                ))}
            </ul> 
            <p>
                {missionStarted} {startMission(shipName)}
            </p>
        </div>
    )
}