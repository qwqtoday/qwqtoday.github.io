
const projects_list_elem = document.getElementById("projects_list")

class Project {
    /**
     * @type {string}
     * @description The name of the project
     */
    name

    /**
     * @type {string}
     * @description The description of the project
     */
    description

    /**
     * @description The constructor of the Project class
     * @param {string} name 
     * @param {string} description 
     */
    constructor (name, description) {
        this.name = name
        this.description = description
    }
}

/**
 * @type {Project[]}
 */
const project_list = [
    new Project("No Projects", "There isn't any projects that I contributed."),
]

/**
 * @name addProject
 * @description Adds a project to the project list element
 * @param {Project} project
 */

function addProject(project){
    let project_item = document.createElement("li")
    project_item.setAttribute("class", "project")
    
    let project_title = document.createElement("h3")
    project_title.setAttribute("class", "project_name")
    project_title.textContent = project.name

    let project_description = document.createElement("h4")
    project_description.setAttribute("class", "project_description")
    project_description.textContent = project.description
    
    project_item
        .appendChild(project_title)
        .appendChild(project_description)

    projects_list_elem.appendChild(project_item)
}

for (let project of project_list) {
    addProject(project)
}