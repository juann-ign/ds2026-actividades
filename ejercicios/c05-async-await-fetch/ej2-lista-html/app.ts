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

function renderizarUsuarios(usuarios: Usuario[]): void {
    const lista = document.getElementById("user_list") as HTMLUListElement;

    usuarios. forEach(({ name, email }) => {
        const li = document.createElement("li");
        li.textContent = `Nombre: ${name}, Email: ${email}`;
        lista.appendChild(li);         
    });
}

async function init(): Promise<void> {
    const cargando = document.getElementById("loading") as HTMLParagraphElement;
    const error = document.getElementById("error") as HTMLParagraphElement;

    try {
        const usuarios = await obtenerUsuarios();
        renderizarUsuarios(usuarios);

    } catch (e) {
        error.textContent = ("Error al cargar los usuarios.");
    
    } finally {
        cargando.style.display = "none";
    }
}

init();