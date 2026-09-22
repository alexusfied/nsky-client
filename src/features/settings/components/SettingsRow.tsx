interface ISettingsRowProps {
    children: any,
}

function SettingsRow({children}: ISettingsRowProps) {
    return (
        <div className={"flex justify-between w-[15vw]"}>
            {children}
        </div>    
    ); 
}

export default SettingsRow;
