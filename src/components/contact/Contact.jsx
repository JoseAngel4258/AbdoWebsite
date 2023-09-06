

export default function Contact() {
    return (
        <div className="bg-white p-4 rounded-lg shadow-lg max-w-sm text-black">
            {/* Contenido del componente de contacto */}
            <h2>Contacto</h2>
            <p>Se me pude comunicar con nostros a traves de nuestro <strong>WhatsApp</strong> <code>+58-555-5555555</code></p>
            <br />
            <p>O muy bien nos puede dejar su informacion y lo atenderemos lo mas pronto posbile</p>
            <br />
            <label htmlFor="name">Nombre y Apellido</label>
            <br />
            <input type="text" name="name" id="name" placeholder="Juan Perez"/>
            <br />
            <label htmlFor="phone">Numero de telefono</label>
            <br />
            <input type="tel" name="phone" id="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="+584143333333" />
        </div>
    )
}