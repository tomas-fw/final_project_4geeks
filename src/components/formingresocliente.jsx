import React from "react"
import { Link } from "react-router-dom";
/* RESPONSIVE LISTO*/
const FormIngresoClient = props => {
    return (
        <>
            <form>
                <Link to='/profile/' type="button" class="btn btn-info mt-2 ml-5">Volver a Mi Perfíl</Link>
                <h1 class="text-center">Formulario para contratar un nuevo plan</h1>
                <br />
                <div class="container">
                    {/* <div class="card">
                        <div class="card-header">
                            <h3>Antecedentes sociales</h3>
                        </div>
                    </div>
                    <br /> */}

                    <fieldset class="form-group" /*género*/>
                        <div class="row">
                            <legend class="col-form pt-0">Indique su género</legend>
                            <div class="col-md-1 col-xs-1"></div>
                            <div class="col-md-10 col-xs-10">
                                <div class="custom-control custom-switch">
                                    <input type="radio" checked id="customRadio1" name="niveleduc" class="custom-control-input" />
                                    <label class="custom-control-label" for="customRadio1">Femenino</label>
                                </div>
                                <div class="custom-control custom-switch">
                                    <input type="radio" id="customRadio2" name="niveleduc" class="custom-control-input" />
                                    <label class="custom-control-label" for="customRadio2">Masculino</label>
                                </div>
                            </div>
                        </div>
                    </fieldset>

                    <div class="form-group row" /*Objetivo*/>
                        <legend class="col-form pt-0">Objetivo</legend>
                        <div class="col-md-10 col-xs-10">
                            <input required type="text" class="form-control" id="objetivo" />
                        </div>
                    </div>

                    {/* <fieldset class="form-group" >
                        <div class="row">
                            <legend class="col-form pt-0">Nivel educacional</legend>
                            <div class="col-sm-1"></div>
                            <div class="col-sm-10">
                                <div class="custom-control custom-switch">
                                    <input type="radio" checked id="customRadio1" name="niveleduc" class="custom-control-input" />
                                    <label class="custom-control-label" for="customRadio1">Educación Media incompleta</label>
                                </div>
                                <div class="custom-control custom-switch">
                                    <input type="radio" id="customRadio2" name="niveleduc" class="custom-control-input" />
                                    <label class="custom-control-label" for="customRadio2">Educación Media completa</label>
                                </div>
                                <div class="custom-control custom-switch">
                                    <input type="radio" id="customRadio3" name="niveleduc" class="custom-control-input" />
                                    <label class="custom-control-label" for="customRadio3">Educación Técnica / Universitaria
                            incompleta</label>
                                </div>
                                <div class="custom-control custom-switch">
                                    <input type="radio" id="customRadio4" name="niveleduc" class="custom-control-input" />
                                    <label class="custom-control-label" for="customRadio4">Educación Técnica / Universitaria
                            completa</label>
                                </div>
                            </div>
                        </div>
                    </fieldset> */}

                    {/* <div class="form-group row" name="Trabajo">
                        <legend class="col-form pt-0">Trabajo / Ocupación</legend>
                        <div class="col-sm-1"></div>
                        <div class="col-sm-10">
                            <input type="password" class="form-control" id="inputPassword3" />
                        </div>
                    </div>
                    */}

                    <br />
                    <div class="card">
                        <div class="card-header">
                            <h3>Antecedentes clínicos</h3>
                        </div>
                    </div>

                    <fieldset class="form-group" /*embarazo*/>
                        <legend class="col-form pt-0">Si usted es mujer, ¿está embarazada?</legend>
                        <div class="row">
                            <div class="col-md-1 col-xs-1"></div>
                            <div class="col-md-4 col-xs-4">
                                <div class="custom-control custom-switch">
                                    <input type="radio" checked id="emb1" name="emb" class="custom-control-input" />
                                    <label class="custom-control-label" for="emb1">No</label>
                                </div>
                                <div class="custom-control custom-switch">
                                    <input type="radio" id="emb2" name="emb" class="custom-control-input" />
                                    <label class="custom-control-label" for="emb2">Si</label>
                                </div>
                            </div>
                            <div class="col-md-4 col-xs-4">
                                <input type="text" class="form-control" id="enf"
                                    placeholder="Indique en qué semana gestacional se encuentra" />
                                <input type="text" class="form-control" id="emb" placeholder="Fecha posible de parto" />
                            </div>
                        </div>
                    </fieldset>

                    <fieldset class="form-group" /*enfermedades*/>
                        <legend class="col-form pt-0">¿Presenta alguna de estas enfermedades?</legend>
                        <div class="row">
                            <div class="col-md-1 col-xs-1"></div>
                            <div class="col-md-4 col-xs-4">
                                <div class="custom-control custom-switch">
                                    <input type="radio" id="enf1" checked name="enf" class="custom-control-input" />
                                    <label class="custom-control-label" for="enf1">Ninguna</label>
                                </div>
                                <div class="custom-control custom-switch">
                                    <input type="radio" id="enf7" name="enf" class="custom-control-input" />
                                    <label class="custom-control-label" for="enf7">Diabetes Mellitus 1</label>
                                </div>
                                <div class="custom-control custom-switch">
                                    <input type="radio" id="enf2" name="enf" class="custom-control-input" />
                                    <label class="custom-control-label" for="enf2">Diabetes Mellitus 2</label>
                                </div>
                                <div class="custom-control custom-switch">
                                    <input type="checkbox" id="enf6" name="enf" class="custom-control-input" />
                                    <label class="custom-control-label" for="enf6">Insuficiencia Cardíaca</label>
                                </div>
                                <div class="custom-control custom-switch">
                                    <input type="checkbox" id="enf3" name="enf" class="custom-control-input" />
                                    <label class="custom-control-label" for="enf3">Hipertensión arterial</label>
                                </div>
                                <div class="custom-control custom-switch">
                                    <input type="checkbox" id="enf4" name="enf" class="custom-control-input" />
                                    <label class="custom-control-label" for="enf4">Dislipidemia (colesterol
                            alto)</label>
                                </div>
                                <div class="custom-control custom-switch">
                                    <input type="checkbox" id="enf5" name="enf" class="custom-control-input" />
                                    <label class="custom-control-label" for="enf5">Insuficiencia renal</label>
                                </div>
                            </div>
                            <div class="col-md-4 col-xs-4">
                                <input type="text" class="form-control" id="enf" placeholder="¿presenta otra enfermedad?" />
                                <input type="text" class="form-control" id="enf" placeholder="¿presenta otra enfermedad?" />
                                <input type="text" class="form-control" id="enf" placeholder="¿presenta otra enfermedad?" />
                                <input type="text" class="form-control" id="enf" placeholder="¿presenta otra enfermedad?" />
                            </div>
                        </div>
                    </fieldset>

                    <div class="form-group" /*medicamentos*/>
                        <legend class="col-form pt-0">¿Toma algún medicamento?</legend>
                        <div class="row">
                            <div class="col-md-1 col-xs-1">
                                <div class="form-check custom-switch">
                                    <input type="radio" id="med1" checked name="medicamentos" class="custom-control-input" />
                                    <label class="custom-control-label" for="med1">No</label>
                                </div>
                                <div class="form-check custom-switch">
                                    <input type="radio" id="med2" name="medicamentos" class="custom-control-input" />
                                    <label class="custom-control-label" for="med2">Si</label>
                                </div>
                            </div>
                            <div class="col-md-3 col-xs-3">
                                <input type="text" class="form-control" id="medicamentos" placeholder="Qué medicamento toma?" />
                                <input type="text" class="form-control" id="medicamentos" placeholder="Qué medicamento toma?" />
                                <input type="text" class="form-control" id="medicamentos" placeholder="Qué medicamento toma?" />
                                <input type="text" class="form-control" id="medicamentos" placeholder="Qué medicamento toma?" />
                            </div>
                            <div class="col-md-3 col-xs-3">
                                <input type="text" class="form-control" id="medicamentos" placeholder="¿Cuántas veces al día?" />
                                <input type="text" class="form-control" id="medicamentos" placeholder="¿Cuántas veces al día?" />
                                <input type="text" class="form-control" id="medicamentos" placeholder="¿Cuántas veces al día?" />
                                <input type="text" class="form-control" id="medicamentos" placeholder="¿Cuántas veces al día?" />
                            </div>
                            <div class="col-md-3 col-xs-3">
                                <input type="text" class="form-control" id="medicamentos"
                                    placeholder="¿De cuantos miligramos es el medicamento?" />
                                <input type="text" class="form-control" id="medicamentos"
                                    placeholder="¿De cuantos miligramos es el medicamento?" />
                                <input type="text" class="form-control" id="medicamentos"
                                    placeholder="¿De cuantos miligramos es el medicamento?" />
                                <input type="text" class="form-control" id="medicamentos"
                                    placeholder="¿De cuantos miligramos es el medicamento?" />
                            </div>
                        </div>
                    </div>

                    <fieldset class="form-group" /*operaciones*/>
                        <legend class="col-form pt-0">¿Le han realizado alguna operación o operaciones?</legend>
                        <div class="row">
                            <div class="col-md-2 col-xs-2">
                                <div class="form-check custom-switch">
                                    <input type="radio" id="op1" checked name="op" class="custom-control-input" />
                                    <label class="custom-control-label" for="op1">No</label>
                                </div>
                                <div class="form-check custom-switch">
                                    <input type="radio" id="op2" name="op" class="custom-control-input" />
                                    <label class="custom-control-label" for="op2">Si</label>
                                </div>
                            </div>
                            <div class="col-dm-4 col-xs-4">
                                <input type="text" class="form-control" id="op" placeholder="¿Qué operación fue?" />
                                <input type="text" class="form-control" id="op" placeholder="¿Qué operación fue?" />
                                <input type="text" class="form-control" id="op" placeholder="¿Qué operación fue?" />
                            </div>
                            <div class="col-md-4 col-xs-4">
                                <input type="text" class="form-control" id="op" placeholder="¿Cuándo fue?" />
                                <input type="text" class="form-control" id="op" placeholder="¿Cuándo fue?" />
                                <input type="text" class="form-control" id="op" placeholder="¿Cuándo fue?" />
                            </div>
                        </div>
                    </fieldset>

                    <fieldset class="form-group" /*orina*/>
                        <div class="row">
                            <legend class="col-form pt-0">Los últimos 7 días, ¿cómo ha notado su orina?</legend>
                            <div class="col-md-1 col-xs-1"></div>
                            <div class="col-md-10 col-xs-10">
                                <div class="custom-control custom-switch">
                                    <input type="radio" checked id="orina1" name="orina" class="custom-control-input" />
                                    <label class="custom-control-label" for="orina1">Color amarillo claro</label>
                                </div>
                                <div class="custom-control custom-switch">
                                    <input type="radio" id="orina2" name="orina" class="custom-control-input" />
                                    <label class="custom-control-label" for="orina2">Color amarillo oscuro</label>
                                </div>
                                <div class="custom-control custom-switch">
                                    <input type="radio" id="orina3" name="orina" class="custom-control-input" />
                                    <label class="custom-control-label" for="orina3">Olor dulce</label>
                                </div>
                                <div class="custom-control custom-switch">
                                    <input type="checkbox" id="orina4" name="orina" class="custom-control-input" />
                                    <label class="custom-control-label" for="orina4">Dolor al orinar</label>
                                </div>
                                <div class="custom-control custom-switch">
                                    <input type="checkbox" id="orina5" name="orina" class="custom-control-input" />
                                    <label class="custom-control-label" for="orina5">Sangre en la orina</label>
                                </div>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset class="form-group" /*digestion*/>
                        <div class="row">
                            <legend class="col-form pt-0">Los últimos 7 días, ¿cómo ha notado sus heces</legend>
                            <div class="col-md-1 col-xs-1"></div>
                            <div class="col-md-10 col-xs-10">
                                <div class="custom-control custom-switch">
                                    <input type="radio" checked id="dig1" name="dg" class="custom-control-input" />
                                    <label class="custom-control-label" for="dig1">Normal</label>
                                </div>
                                <div class="custom-control custom-switch">
                                    <input type="radio" id="dig2" name="dg" class="custom-control-input" />
                                    <label class="custom-control-label" for="dig2">Estítica</label>
                                </div>
                                <div class="custom-control custom-switch">
                                    <input type="radio" id="dig3" name="dg" class="custom-control-input" />
                                    <label class="custom-control-label" for="dig3">Diarrea</label>
                                </div>
                                <div class="custom-control custom-switch">
                                    <input type="radio" id="dig4" name="dg" class="custom-control-input" />
                                    <label class="custom-control-label" for="dig4">Presencia de sangre en las
                            heces</label>
                                </div>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset class="form-group" /*signosysintomas*/>
                        <div class="row">
                            <legend class="col-form pt-0">¿Presenta alguno de estos síntomas?</legend>
                            <div class="col-md-1 col-xs-1"></div>
                            <div class="col-md-4 col-xs-4">
                                <div class="custom-control custom-switch">
                                    <input type="checkbox" checked id="sys" name="sys" class="custom-control-input" />
                                    <label class="custom-control-label" for="sys13">Ninguno</label>
                                </div>
                                <div class="custom-control custom-switch">
                                    <input type="checkbox" id="sys1" name="sys" class="custom-control-input" />
                                    <label class="custom-control-label" for="sys1">Dolor de cabeza</label>
                                </div>
                                <div class="custom-control custom-switch">
                                    <input type="checkbox" id="sys2" name="sys" class="custom-control-input" />
                                    <label class="custom-control-label" for="sys2">Manos y/o pies hichados</label>
                                </div>
                                <div class="custom-control custom-switch">
                                    <input type="checkbox" id="sys3" name="sys" class="custom-control-input" />
                                    <label class="custom-control-label" for="sys3">Polidipsia</label>
                                </div>
                                <div class="custom-control custom-switch">
                                    <input type="checkbox" id="sys4" name="sys" class="custom-control-input" />
                                    <label class="custom-control-label" for="sys4">Fotopsia</label>
                                </div>
                                <div class="custom-control custom-switch">
                                    <input type="checkbox" id="sys5" name="sys" class="custom-control-input" />
                                    <label class="custom-control-label" for="sys5">Poliurea</label>
                                </div>
                                <div class="custom-control custom-switch">
                                    <input type="checkbox" id="sys6" name="sys" class="custom-control-input" />
                                    <label class="custom-control-label" for="sys6">Polifagia</label>
                                </div>
                            </div>
                            <div class="col-md-4 col-xs-4">
                                <div class="custom-control custom-switch">
                                    <input type="checkbox" id="sys7" name="sys" class="custom-control-input" />
                                    <label class="custom-control-label" for="sys7">Reflujo gástrico</label>
                                </div>
                                <div class="custom-control custom-switch">
                                    <input type="checkbox" id="sys8" name="sys" class="custom-control-input" />
                                    <label class="custom-control-label" for="sys8">Acidez estomacal</label>
                                </div>
                                <div class="custom-control custom-switch">
                                    <input type="checkbox" id="sys9" name="sys" class="custom-control-input" />
                                    <label class="custom-control-label" for="sys9">Mareos</label>
                                </div>
                                <div class="custom-control custom-switch">
                                    <input type="checkbox" id="sys10" name="sys" class="custom-control-input" />
                                    <label class="custom-control-label" for="sys10">Náuseas</label>
                                </div>
                                <div class="custom-control custom-switch">
                                    <input type="checkbox" id="sys11" name="sys" class="custom-control-input" />
                                    <label class="custom-control-label" for="sys11">Vómitos</label>
                                </div>
                                <div class="custom-control custom-switch">
                                    <input type="checkbox" id="sys12" name="sys" class="custom-control-input" />
                                    <label class="custom-control-label" for="sys12">Vómitos inducidos</label>
                                </div>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset class="form-group" /*ayunos*/>
                        <div class="row">
                            <legend class="col-form pt-0">¿Realizas ayunos?</legend>
                            <div class="col-md-1 col-xs-1"></div>
                            <div class="col-md-1 col-xs-1">
                                <div class="form-check custom-switch">
                                    <input type="radio" checked id="ayunos1" name="ayunos" class="custom-control-input" />
                                    <label class="custom-control-label" for="ayunos1">No</label>
                                </div>
                            </div>
                            <div class="col-md-1 col-xs-1">
                                <div class="form-check custom-switch">
                                    <input type="radio" id="ayunos2" name="ayunos" class="custom-control-input" />
                                    <label class="custom-control-label" for="ayunos2">Si</label>
                                </div>
                            </div>
                            <div class="col-md-8 col-xs-8">
                                <input type="text" class="form-control" id="ayunos"
                                    placeholder="¿Cuánto dura su ayuno y cada cuantos días ayuna?" />
                            </div>
                        </div>
                    </fieldset>

                    <fieldset class="form-group" /*apetito*/>
                        <div class="row">
                            <legend class="col-form pt-0">¿Cómo ha presentado su apetito los últimos 7 días?</legend>
                            <div class="col-md-1 col-xs-1">
                            </div>
                            <div class="col-md-10 col-xs-10">
                                <div class="form-check custom-switch">
                                    <input type="radio" checked id="apetito1" name="apetito" class="custom-control-input" />
                                    <label class="custom-control-label" for="apetito1">Normal</label>
                                </div>
                                <div class="form-check custom-switch">
                                    <input type="radio" id="apetito2" name="apetito" class="custom-control-input" />
                                    <label class="custom-control-label" for="apetito2">Aumentado</label>
                                </div>
                                <div class="form-check custom-switch">
                                    <input type="radio" id="apetito3" name="apetito" class="custom-control-input" />
                                    <label class="custom-control-label" for="apetito3">Disminuido</label>
                                </div>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset class="form-group" /*ansiedad*/>
                        <div class="row">
                            <legend class="col-form pt-0">En escala del 0 al 5, ¿qué nivel ansiedad presenta al comer?
                </legend>
                            <div class="col-md-1 col-xs-1"></div>
                            <div class="col-md-10 col-xs-10">
                                <div class=" custom-switch form-check">
                                    <input type="radio" checked id="ansiedad1" name="ansiedad" class="custom-control-input" />
                                    <label class="custom-control-label" for="ansiedad1">0</label>
                                </div>
                                <div class=" custom-switch form-check">
                                    <input type="radio" id="ansiedad2" name="ansiedad" class="custom-control-input" />
                                    <label class="custom-control-label" for="ansiedad2">1</label>
                                </div>
                                <div class=" custom-switch form-check">
                                    <input type="radio" id="ansiedad3" name="ansiedad" class="custom-control-input" />
                                    <label class="custom-control-label" for="ansiedad3">2</label>
                                </div>
                                <div class=" custom-switch form-check">
                                    <input type="radio" id="ansiedad4" name="ansiedad" class="custom-control-input" />
                                    <label class="custom-control-label" for="ansiedad4">3</label>
                                </div>
                                <div class=" custom-switch form-check">
                                    <input type="radio" id="ansiedad5" name="ansiedad" class="custom-control-input" />
                                    <label class="custom-control-label" for="ansiedad5">4</label>
                                </div>
                                <div class=" custom-switch form-check">
                                    <input type="radio" id="ansiedad6" name="ansiedad" class="custom-control-input" />
                                    <label class="custom-control-label" for="ansiedad6">5</label>
                                </div>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset class="form-group" /*tabaco*/>
                        <div class="row">
                            <legend class="col-form pt-0">¿Fuma tabaco? ¿Cuántas veces a la semana?</legend>
                            <div class="col-md-1 col-xs-1"> </div>
                            <div class="col-md-10 col-xs-10">
                                <div class="form-check custom-switch">
                                    <input type="radio" checked id="tabaco" name="tabaco" class="custom-control-input" />
                                    <label class="custom-control-label" for="tabaco1">No fumo</label>
                                </div>
                                <div class="form-check custom-switch">
                                    <input type="radio" id="tabaco2" name="tabaco" class="custom-control-input" />
                                    <label class="custom-control-label" for="tabaco2">0 a 10 al día</label>
                                </div>
                                <div class="form-check custom-switch">
                                    <input type="radio" id="tabaco3" name="tabaco" class="custom-control-input" />
                                    <label class="custom-control-label" for="tabaco3">11 a 20 al día</label>
                                </div>
                                <div class="form-check custom-switch">
                                    <input type="radio" id="tabaco4" name="tabaco" class="custom-control-input" />
                                    <label class="custom-control-label" for="tabaco4">más de 20 al día</label>
                                </div>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset class="form-group" /*alcohol*/>
                        <div class="row">
                            <legend class="col-form pt-0">¿Consume alcohol? ¿Cuántas veces a la semana?</legend>
                            <div class="col-md-1 col-xs-1"></div>
                            <div class="col-md-10 col-xs-10">
                                <div class="form-check custom-switch">
                                    <input type="radio" checked id="alcohol1" name="alcohol" class="custom-control-input" />
                                    <label class="custom-control-label" for="alcohol1">No consumo alcohol</label>
                                </div>
                                <div class="form-check custom-switch">
                                    <input type="radio" id="alcohol2" name="alcohol" class="custom-control-input" />
                                    <label class="custom-control-label" for="alcohol2">de 0 a 2 veces por semana</label>
                                </div>
                                <div class="form-check custom-switch">
                                    <input type="radio" id="alcohol3" name="alcohol" class="custom-control-input" />
                                    <label class="custom-control-label" for="alcohol3">de 3 a 4 veces por semana</label>
                                </div>
                                <div class="form-check custom-switch">
                                    <input type="radio" id="alcohol4" name="alcohol" class="custom-control-input" />
                                    <label class="custom-control-label" for="alcohol4">5 o más veces por semana </label>
                                </div>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset class="form-group" /*actividad_fisica*/>
                        <div class="row">
                            <legend class="col-form pt-0">¿Hace Actividad física? ¿Cuántas veces a la semana?</legend>
                            <div class="col-md-1 col-xs-1"></div>
                            <div class="col-md-4 col-xs-4">
                                <div class="form-check custom-switch">
                                    <input type="radio" id="af1" checked name="af" class="custom-control-input" />
                                    <label class="custom-control-label" for="af1">Ninguna</label>
                                </div>
                                <div class="form-check custom-switch">
                                    <input type="radio" id="af2" name="af" class="custom-control-input" />
                                    <label class="custom-control-label" for="af2">de 0 a 2 veces por semana</label>
                                </div>
                                <div class="form-check custom-switch">
                                    <input type="radio" id="af3" name="af" class="custom-control-input" />
                                    <label class="custom-control-label" for="af3">de 3 a 4 veces por semana</label>
                                </div>
                                <div class="form-check custom-switch">
                                    <input type="radio" id="af4" name="af" class="custom-control-input" />
                                    <label class="custom-control-label" for="af4">5 o más veces por semana </label>
                                </div>
                            </div>
                            <div class="col-md-4 col-xs-4">
                                <input type="text" class="form-control" id="actfis"
                                    placeholder="¿Qué actividad o ejervicio reaiza?" />
                                <input type="text" class="form-control" id="actfis"
                                    placeholder="¿Qué actividad o ejervicio reaiza?" />
                                <input type="text" class="form-control" id="actfis"
                                    placeholder="¿Qué actividad o ejervicio reaiza?" />
                                <input type="text" class="form-control" id="actfis"
                                    placeholder="¿Qué actividad o ejervicio reaiza?" />
                            </div>
                        </div>
                    </fieldset>

                    <fieldset class="form-group" /*supl_nut*/>
                        <div class="row">
                            <legend class="col-form pt-0">¿Toma algún suplemento nutricional?</legend>
                            <div class="col-dm-2 col-xs-2">
                                <div class="form-check custom-switch">
                                    <input type="radio" id="supl_nut1" checked name="supl_nut" class="custom-control-input" />
                                    <label class="custom-control-label" for="supl_nut1">No</label>
                                </div>
                                <div class="form-check custom-switch">
                                    <input type="radio" id="supl_nut2" name="supl_nut" class="custom-control-input" />
                                    <label class="custom-control-label" for="supl_nut2">Si</label>
                                </div>
                            </div>
                            <div class="col-md-3 col-xs-3">
                                <input type="text" class="form-control" id="supl_nut" placeholder="¿Qué suplemento toma?" />
                                <input type="text" class="form-control" id="supl_nut" placeholder="¿Qué suplemento toma?" />
                                <input type="text" class="form-control" id="supl_nut" placeholder="¿Qué suplemento toma?" />
                                <input type="text" class="form-control" id="supl_nut" placeholder="¿Qué suplemento toma?" />
                            </div>
                            <div class="col-md-3 col-xs-3">
                                <input type="text" class="form-control" id="supl_nut"
                                    placeholder="¿Cuántas medidas o pastillas?" />
                                <input type="text" class="form-control" id="supl_nut"
                                    placeholder="¿Cuántas medidas o pastillas?" />
                                <input type="text" class="form-control" id="supl_nut"
                                    placeholder="¿Cuántas medidas o pastillas?" />
                                <input type="text" class="form-control" id="supl_nut"
                                    placeholder="¿Cuántas medidas o pastillas?" />
                            </div>
                            <div class="col-md-3 col-xs-3">
                                <input type="text" class="form-control" id="supl_nut" placeholder="¿Cuántas veces al día?" />
                                <input type="text" class="form-control" id="supl_nut" placeholder="¿Cuántas veces al día?" />
                                <input type="text" class="form-control" id="supl_nut" placeholder="¿Cuántas veces al día?" />
                                <input type="text" class="form-control" id="supl_nut" placeholder="¿Cuántas veces al día?" />
                            </div>
                        </div>
                    </fieldset>

                    <fieldset class="form-group" /*lesiones*/>
                        <legend class="col-form pt-0">¿Presenta alguna lesión o molestia?</legend>
                        <div class="row justify-center">
                            <div class="col-md-2 col-xs-2">
                                <div class="form-check custom-switch">
                                    <input type="radio" id="lesiones1" checked name="lesiones" class="custom-control-input" />
                                    <label class="custom-control-label" for="lesiones1">No</label>
                                </div>
                                <div class="form-check custom-switch">
                                    <input type="radio" id="lesiones2" name="lesiones" class="custom-control-input" />
                                    <label class="custom-control-label" for="lesiones2">Si</label>
                                </div>
                            </div>
                            <div class="col-md-7 col-xs-7">
                                <input type="text" class="form-control" id="lesiones" placeholder="¿Qué lesión presenta?" />
                                <input type="text" class="form-control" id="lesiones" placeholder="¿Qué lesión presenta?" />
                                <input type="text" class="form-control" id="lesiones" placeholder="¿Qué lesión presenta?" />
                                <input type="text" class="form-control" id="lesiones" placeholder="¿Qué lesión presenta?" />
                            </div>
                        </div>
                    </fieldset>

                    <fieldset class="form-group" /*alergiaAlim*/>
                        <legend class="col-form pt-0">¿Presenta alguna alergia o intolerancia alimentaria?</legend>
                        <div class="row justify-center">
                            <div class="col-md-2 col-xs-2">
                                <div class="form-check custom-switch">
                                    <input type="radio" id="alergiaAlim1" checked name="alergiaAlim"
                                        class="custom-control-input" />
                                    <label class="custom-control-label" for="alergiaAlim1">No</label>
                                </div>
                                <div class="form-check custom-switch">
                                    <input type="radio" id="alergiaAlim2" name="alergiaAlim" class="custom-control-input" />
                                    <label class="custom-control-label" for="alergiaAlim2">Si</label>
                                </div>
                            </div>
                            <div class="col-md-7 col-xs-7">
                                <input type="text" class="form-control" id="alergiaAlim" placeholder="¿A qué alimento?" />
                                <input type="text" class="form-control" id="alergiaAlim" placeholder="¿A qué alimento?" />
                                <input type="text" class="form-control" id="alergiaAlim" placeholder="¿A qué alimento?" />
                                <input type="text" class="form-control" id="alergiaAlim" placeholder="¿A qué alimento?" />
                            </div>
                        </div>
                    </fieldset>

                    <fieldset class="form-group" /*peso*/>
                        <legend class="col-form pt-0">Cuál es su peso actual?</legend>
                        <div class="row justify-center">
                            <div class="col-md-7 col-xs-7">
                                <input required type="text" class="form-control" id="peso" placeholder="Indique el peso" />
                            </div>
                        </div>
                    </fieldset>

                    <fieldset class="form-group" /*talla*/>
                        <legend class="col-form pt-0">Cuál es su altura actual?</legend>
                        <div class="row justify-center">
                            <div class="col-sm-7">
                                <input required type="text" class="form-control" id="talla" placeholder="Indique su altura en centimetros" />
                            </div>
                        </div>
                    </fieldset>

                    <fieldset class="form-group" /*ccintura*/ >
                        <legend class="col-form pt-0">Cuál es su circunferencia de cintura?</legend>
                        <div class="row justify-center">
                            <div class="col-md-7 col-xs-7">
                                <input required type="text" class="form-control" id="ccintura" placeholder="Indique su circunferencia de cintura en centimetros" />
                            </div>
                        </div>
                    </fieldset>

                    <fieldset class="form-group" /*Personal trainer*/ >
                        <legend class="col-form pt-0">Ingresa el ID del Personal Trainer que elegiste</legend>
                        <div class="row justify-center">
                            <div class="col-md-7 col-xs-7">
                                <input required type="text" class="form-control" id="ccintura" placeholder="Indique su circunferencia de cintura en centimetros" />
                            </div>
                        </div>
                    </fieldset>

                    <fieldset class="form-group" /*Nutricionista*/ >
                        <legend class="col-form pt-0">Ingresa el ID del Nutricionista que elegiste</legend>
                        <div class="row justify-center">
                            <div class="col-md-7 col-xs-7">
                                <input required type="text" class="form-control" id="ccintura" placeholder="Indique su circunferencia de cintura en centimetros" />
                            </div>
                        </div>
                    </fieldset>

                    <div class="form-group">
                        <div class="form-check">
                            <input required class="form-check-input" type="checkbox" id="gridCheck" />
                            <label class="form-check-label" for="gridCheck">
                                Acepto los terminos de confidencialidad</label>
                        </div>
                    </div>

                    <Link to="#" type="submit" class="btn btn-primary">Enviar formulario</Link>
                </div>
            </form>
        </>
    )
}

export default FormIngresoClient;