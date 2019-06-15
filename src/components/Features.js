import React from "react"
import "./features.less"

function Features(props) {
  return (
    <div class="fluid features">
      <div class="row highlights">
        <div class="col-lg-4">
          <div className="highlight">
            <img src={require("../images/idea.png")} />
            <h2>Visualized</h2>
            <p>
              You can create project elements like components, actions with
              intuitive UI, inspect project structure with dashboard and
              dependency diagrams.
            </p>
          </div>
        </div>
        <div class="col-lg-4">
          <div className="highlight">
            <img src={require("../images/settings.png")} />
            <h2>Extensible</h2>
            <p>
              Rekit is constructed by plugins, you can create a Rekit plugin by
              one click and easily to extend or customize Rekit capabilities.
              Just start build your own IDE!
            </p>
          </div>
        </div>
        <div class="col-lg-4">
          <div className="highlight">
            <img src={require("../images/globe.png")} />
            <h2>Remote Access</h2>
            <p>
              Rekit is web based, it starts a web server behind to manage projects.
              Whenever you open a project with Rekit, you can always access it via
              URL in a browser on any device.
            </p>
          </div>
        </div>
      </div>

      <hr class="featurette-divider" />

      <div class="row featurette">
        <div class="col-md-7 text-part">
          <img src={require("../images/oval1.png")} className="img-oval" />
          <h2 class="featurette-heading">Re-organize your source files</h2>
          <p class="lead">
            Rekit re-organizes your source files to meaningful virtual elements
            like components, actions rather than show them as folder structure.
            It helps to understand project and navigate between source files
            much easier. For example, a React component consists of component
            file, style file, test file. Rekit shows a virtual element with two
            level tab structure.
          </p>
        </div>
        <div class="col-md-5">
          <img
            class="featurette-image img-fluid mx-auto"
            src={require("../images/re-organize.png")}
            alt="reOrganize"
          />
        </div>
      </div>

      <hr class="featurette-divider" />

      <div class="row featurette  text-right">
        <div class="col-md-7 order-md-2 text-part">
          <img src={require("../images/oval3.png")} className="img-oval" />
          <h2 class="featurette-heading">
            Track complexity with dependency diagram
          </h2>
          <p class="lead">
            Rekit understands your project elements and their relationship. You
            can always track the complexity with overview diagram or single
            element diagram.
          </p>
        </div>
        <div class="col-md-5 order-md-1">
          <img
            width="450"
            class="featurette-image img-fluid mx-auto"
            src={require("../images/diagram.png")}
            alt="diagram"
          />
        </div>
      </div>

      <hr class="featurette-divider" />

      <div class="row featurette">
        <div class="col-md-7 text-part">
          <img src={require("../images/oval2.png")} className="img-oval" />
          <h2 class="featurette-heading">Generate code with one click</h2>
          <p class="lead">
            In modern frontend development, you aften need to write much
            boilerplate code before writing business code. Now you can use
            pre-defined or custom templates to generate copmonents, actions,
            tests with intuitive UI. Besides code generation, you can also
            re-name or delete a virtual element easily, like delete a component,
            Rekit will auto delete all related files of a component with one
            click.
          </p>
        </div>
        <div class="col-md-5">
          <img
            width="450"
            class="featurette-image img-fluid mx-auto"
            src={require("../images/code-gen.png")}
            alt="codeGen"
          />
        </div>
      </div>

      <hr class="featurette-divider" />

      <div class="row featurette text-right">
        <div class="col-md-7 order-md-2 text-part">
          <img src={require("../images/oval4.png")} className="img-oval" />
          <h2 class="featurette-heading">
            Perform common tasks with intuitive UI
          </h2>
          <p class="lead">
            Rekit is focused on visualized development, you no longer need a
            terminal to perform common tasks like running npm scripts, managing
            dependencies. You can do all these things without leaving the IDE
            with intuitive UI.
          </p>
        </div>
        <div class="col-md-5 order-md-1">
          <img
            class="featurette-image img-fluid mx-auto"
            src={require("../images/bottom.png")}
            alt="bottomDrawer"
          />
        </div>
      </div>

      <hr class="featurette-divider" />
    </div>
  )
}

export default Features
