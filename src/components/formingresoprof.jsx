import React from "react"

const FormIngresoProf = props => {
    return (
        <>
            <div className="container">
                <br />
                <h1 classname="text-justify-center" >Formulario de ingreso</h1>
                <br />
                <form id="loginForm" >
                    <div classname="form-group row" name="name">
                        <label for="input">Nombre</label>
                        <input required type="input" class="form-control" id="nameprof" aria-describedby="name" />
                        <small id="nameprof" class="form-text text-muted">Escriba su nombre completo</small>
                        <br />
                    </div>

                    <div classname="form-group row" name="lastname">
                        <label for="input">Lastname</label>
                        <input required type="input" class="form-control" id="lastnameprof" aria-describedby="lastname" />
                        <small id="lastnameprof" class="form-text text-muted">Escriba ambos apellidos</small>
                        <br />
                    </div>

                    <div classname="form-group row" name="email">
                        <label for="inputEmail3" >Email</label>
                        <input required type="input" class="form-control" id="emailprof" aria-describedby="emailprof" />
                        <small id="emailprof" class="form-text text-muted">El email que escriba, va a ser su usuario</small>
                        <br />
                    </div>

                    <div classname="form-group row" name="password">
                        <label for="input" >Password</label>
                        <input required type="input" class="form-control" id="passordprof" aria-describedby="passordprof" />
                        <br />
                    </div>

                    <div classname="form-group row" name="photo">
                        <label for="input" >Foto</label>
                        <div className="form-group row">
                            <input required type="file" classname="form-control-file" id="exampleFormControlFile1" />
                            <br />
                            <br />
                        </div>
                    </div>

                    <div classname="form-group row" name="specialties">
                        <label for="input">Specialties</label>
                        <input required type="text" class="form-control" id="specialties" />
                        <br />
                    </div>

                    <div classname="form-group row" name="education">
                        <label for="input" >Education</label>
                        <input required type="text" class="form-control" id="education" />
                        <br />
                    </div>

                    <div classname="form-group row" name="age">
                        <label for="input">Birth date</label>
                        <input required type="text" class="form-control" id="age" />
                        <br />
                    </div>

                    <div classname="form-group row" name="description">
                        <label for="input">Description</label>
                        <textarea required class="form-control" id="description" rows="3"></textarea>
                        <br />
                    </div>

                    <div classname="form-group row" name="certAntec">
                        <label for="input">Certificado de antecedentes</label>
                        <input required type="file" class="form-control-file" id="certAntec" />
                        <br />
                    </div>

                    <div classname="form-group row" name="certTitulo">
                        <label for="input">Certificado de título</label>
                        <input required type="file" class="form-control-file" id="certTitulo" />
                        <br />
                    </div>

                    <div classname="form-group row" name="certSuperInt">
                        <label for="input" >Certificado de Superintendencia de Salud</label>
                        <input type="file" class="form-control-file" id="certSuperInt" />
                        <br />
                        <br />
                    </div>

                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Acepto términos y contratos</label>
                    </div>

                    <button onclick="" type="submit" class="btn btn-primary">Enviar formulario</button>
                </form>
            </div>
            <br />
        </>
    )
}

export default FormIngresoProf;