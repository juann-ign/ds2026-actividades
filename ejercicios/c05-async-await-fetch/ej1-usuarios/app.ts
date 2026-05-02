interface Usuario {
    id: number;
    name: string;
    email: string;
    phone: string;
}

async function obtenerUsuarios(): Promise<Usuario[]>{
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")

        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        
        const usuarios: Usuario[] = await response.json();
        return usuarios;

    } catch (error){
        console.error("Error al obtener los usuarios:", error);
        return [];
    }
}

const usuarios = await obtenerUsuarios();

usuarios. forEach(({ name, email }) => {
    console.log(`Nombre: ${name}, Email: ${email}`);    
});

export {};