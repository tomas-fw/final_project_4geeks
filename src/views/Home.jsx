import React from 'react'


const Home = props => {

    return (
        <>
            <div className="container-fluid">

                {/* Jumbotron */}
                <div className="row">
                    <div className="col-md-12">
                        <div class="jumbotron jumbotron-fluid">
                            <div class="container">
                                <div className="row">

                                    <h1 class="display-4">Fluid jumbotron</h1>
                                    <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <img class="card-img-top card-img" src="https://via.placeholder.com/150" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Importance of a good Nutrition</h5>
                                <p class="card-text">Ahealthy lifestyle starts in the kitchen</p>
                                <a href="#" class="btn btn-primary">Ask a profesional!</a>
                            </div>

                        </div>
                    </div>
                    {/* Cards */}
                    <div className="col-md-4">
                        <div className="card">
                            <img class="card-img-top card-img" src='https://via.placeholder.com/150' alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">We Are Made to Move</h5>
                                <p class="card-text">Our body was made to be in constant movement, wanna know why?</p>
                                <a href="#" class="btn btn-primary">Ask a profesional</a>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img class="card-img-top card-img" src="https://via.placeholder.com/150" alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Real cases?</h5>
                                <p class="card-text">Would you like se some real life stories of people who change their life's with our help?</p>
                                <a href="#" class="btn btn-primary">Check it out!</a>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a ante laoreet, porta lacus blandit, lacinia mi. Cras vitae lobortis nibh. In sagittis consectetur dui ut efficitur. Phasellus lacus lorem, finibus id mi eget, laoreet elementum sapien. Vestibulum vel nisl placerat, sagittis massa eget, efficitur libero. Quisque pulvinar elit risus, non scelerisque odio tempor vitae. Vestibulum facilisis mauris eget feugiat ultrices. Donec sodales volutpat felis placerat laoreet. Mauris tristique porta risus sit amet maximus. Morbi ut nibh ac lacus placerat tempus vitae ut erat. Nunc quis dapibus sem, sed tristique odio. Vestibulum ante ipsum primis in faucibus orci luctus et.</p>
                    </div>
                </div>
                {/* Card Column */}
                <div className="row">
                    <div className="col-md-12">
                        <div class="card-columns">
                            <div class="card">
                                <img class="card-img-top" src="https://via.placeholder.com/150" alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Card title that wraps to a new line</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                            <div class="card p-3">
                                <blockquote class="blockquote mb-0 card-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                    <footer class="blockquote-footer">
                                        <small class="text-muted">
                                            Someone famous in <cite title="Source Title">Source Title</cite>
                                        </small>
                                    </footer>
                                </blockquote>
                            </div>
                            <div class="card">
                                <img class="card-img-top" src="https://via.placeholder.com/150" alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                            <div class="card">
                                <img class="card-img-top" src="https://via.placeholder.com/150" alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                            <div class="card text-center">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                            <div class="card">
                                <img class="card-img" src="https://via.placeholder.com/150" alt="Card image" />
                            </div>
                            <div class="card p-3 text-right card-img-top">
                                <blockquote class="blockquote mb-0" >
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                    <footer class="blockquote-footer">
                                        <small class="text-muted">
                                            Someone famous in <cite title="Source Title">Source Title</cite>
                                        </small>
                                    </footer>
                                </blockquote>
                            </div>
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Home