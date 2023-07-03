
import PropTypes from 'prop-types';
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

function displayLinkArray(title, urlAndTitles) {
    return <details className="bg-gray-300 open:bg-amber-200 duration-300">
            <summary className="bg-inherit px-5 py-3 text-lg cursor-pointer">{`${title} (${urlAndTitles.length})`}</summary>
                <ul className="list-disc"> {
                (urlAndTitles ?? []).map( (currentResource) =>
                        <li className="ml-10" key={currentResource.url}><Link href={currentResource.url}>{currentResource.title}</Link></li>
                )}
                </ul>
                </details>
}


function displayResourceArray(resourceArray) {
    return <> {
        (resourceArray ?? []).map( (current) => displayLinkArray(current.title, current.resources))}
    </>
}


function displayNote(markdown) {
    return <div className="renderedMarkdownInside"><ReactMarkdown>{markdown}</ReactMarkdown></div>
}


/**
   Notes can either be one level deep or, theoretically given the data structure,
   infinitely nestled. If you're hit a `description` key that's the one with the Markdown.
   However, the object structure should look something like this:
   title:
   notes: (array of the following)
       title
       description
           isNoteContent
           lines
           attachments: (array of title and url)

*/
function displayNotesArray(notesArray) {
    return <> {
        (notesArray ?? [])
            .map( (current) => {
                let notes = <></>
                let markdown = <></>
                let attachments = <></>

                if (current.notes) {
                    notes = displayNotesArray(current.notes)
                }
                if (current.description) {
                    markdown = displayNote(current.description.lines.join("\n"))
                }
                if (current.attachments && (current.attachments.length > 0)) {
                    attachments = displayLinkArray(`${current.title} Attachments`, current.attachments)
                }
                return (<div className="my-8">
                        <h1>{current.title}</h1>
                        {notes}
                        {markdown}
                        {attachments}
                    </div>)
            })
    }</>
}


const WorkspaceDisplay = (props)=>  {
    const { workspaceName, resources, notes } = props
    return (<div className="w-full min-h-screen">
                <div>{workspaceName}</div>
                <div className="grid grid-flow-row grid-cols-5 gap-8">
                   <div className="col-span-3">

                    {displayNotesArray(notes)}
                   </div>
                   <div className="col-span-2 overflow-visible">
                     <h1>Resources</h1>
                     {displayResourceArray(resources)}
                   </div>
                </div>

            </div>
    )
}

WorkspaceDisplay.propTypes = {
    workspaceName: PropTypes.string.isRequired,
    resources: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            resources: PropTypes.arrayOf(
                PropTypes.shape({
                    title: PropTypes.string,
                    url: PropTypes.string
                })
            )
        })
    ),
    notes: PropTypes.arrayOf( PropTypes.object )
}

export default WorkspaceDisplay
