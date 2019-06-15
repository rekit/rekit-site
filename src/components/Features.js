import React from "react"
import "./features.less"

function Features(props) {
  return (
    <div class="fluid features">
      <div class="row highlights">
        <div class="col-lg-4">
          <img src={require("../images/idea.png")} />
          <h2>Visualized</h2>
          <p>
            You can create project elements like components, actions with
            intuitive UI, inspect project structure with dashboard and dependency
            diagrams.
          </p>
        </div>
        <div class="col-lg-4">
          <img src={require("../images/settings.png")} />
          <h2>Extensible</h2>
          <p>
            Rekit is constructed by plugins, you can create a Rekit plugin by one
            click and easily to extend or customize Rekit capabilities. Just start
            build your own IDE!
          </p>
        </div>
        <div class="col-lg-4">
          <img src={require("../images/globe.png")} />
          <h2>Remote Access</h2>
          <p>
            Whenever you open a project with Rekit, you can access it via a URL in a browser
            on any device.
          </p>
        </div>
      </div>

      <hr class="featurette-divider" />

      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">
            Re-organize your source files
          </h2>
          <p class="lead">
            Related source files are organized to meaningful virtual elements like components, actions.
            For example, a React component consists of component class, style file, test file.
          </p>
          <ul>
            <li>Easy to understand</li>
            <li>Easy to navigate</li>
          </ul>
        </div>
        <div class="col-md-5">
          <img
            class="featurette-image img-fluid mx-auto"
            src={require('../images/rekit-studio.png')}
            alt="Generic placeholder image"
          />
        </div>
      </div>

      <hr class="featurette-divider" />

      <div class="row featurette">
        <div class="col-md-7 order-md-2">
          <h2 class="featurette-heading">
            Understand your project with dependency diagram
          </h2>
          <p class="lead">
            Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
            ligula porta felis euismod semper. Praesent commodo cursus magna,
            vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
            commodo.
          </p>
        </div>
        <div class="col-md-5 order-md-1">
          <img
            class="featurette-image img-fluid mx-auto"
            src={require('../images/rekit-studio.png')}
            alt="Generic placeholder image"
          />
        </div>
      </div>

      <hr class="featurette-divider" />

      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">
            And lastly, this one. <span class="text-muted">Checkmate.</span>
          </h2>
          <p class="lead">
            Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
            ligula porta felis euismod semper. Praesent commodo cursus magna,
            vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
            commodo.
          </p>
        </div>
        <div class="col-md-5">
          <img
            class="featurette-image img-fluid mx-auto"
            src={require('../images/rekit-studio.png')}
            alt="Generic placeholder image"
          />
        </div>
      </div>

      <hr class="featurette-divider" />
    </div>
  )
}

export default Features
