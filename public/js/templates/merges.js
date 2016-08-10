$( document ).ready(function() {
  if (window.location.pathname === '/'){
    $('body').append(
      `<script id='merge' type='text/x-handlebars-template'>
        <fieldset id='merge-{{id}}'>
          <legend class='merge-title'>{{title}}</legend>
          <div class='row'>
            <div class='col-2'>
              <label class='label merge-subtitle'>Branch:</label>
            </div><div class='col-10'>
              <label class='label merge-info'>{{source_branch}}</label>
            </div>
          </div>
          <div class='row'>
            <div class='col-2'>
              <label class='label merge-subtitle'>Author:</label>
            </div><div class='col-10'>
              <label class='label merge-info'>{{author}}</label>
            </div>
          </div>
          <div class='row'>
            <div class='col-2'>
              <label class='label merge-subtitle'>Date:</label>
            </div><div class='col-10'>
              <label class='label merge-info'>{{date}}</label>
            </div>
          </div>
          <div class='row'>
            <div class='col-2'>
              <label class='label merge-subtitle'>Info:</label>
            </div><div class='col-10'>
              <label class='label merge-info'>{{description}}</label>
            </div>
          </div>
          <div class='row center'>
            <button class='button btnShowCommits' id='btnShowCommits-{{id}}'
            value='commits-merge-{{id}}'>Show Commits</button>
          </div>
          <hr/>
          <div class='row commit-div'>
            <div id='commits-merge-{{id}}' class='row commit-messages-container' value='hide'>
            </div>
          </div>
        </fieldset>
      </script>`
    )
  }
})
