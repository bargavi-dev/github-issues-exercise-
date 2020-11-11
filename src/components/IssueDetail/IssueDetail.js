import React, { useEffect, useState } from 'react';
import { useParams} from "react-router-dom";
import Markdown from 'react-markdown';
import timeSince from '../../lib/timeSince';
import './IssueDetail.css'



export default function IssueDetail() {
    const { number } = useParams();
    const [ issueData, setIssueData] = useState();


    useEffect(() => {
        fetch(`https://api.github.com/repos/facebook/create-react-app/issues/${number}`)
            .then(res => res.json())
            .then(data => {
                setIssueData(data);
            })
    }, [number])


    return (
        <div className="IssueDetail">
          { issueData && (
            <>
              <h1>{ issueData.title } <span style={{color: '#999'}}>#{issueData.number}</span></h1>
              <div><span className="open-badge" title="Status: Open" class="State State--green "><svg height="16" class="octicon octicon-issue-opened" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"></path></svg> Open
              </span> {issueData.user.login} opened this issue { timeSince(new Date(issueData.created_at)) } . </div>
              <br />
              <hr />
              <div className="markdown">
                <Markdown source={issueData.body} allowDangerousHtml={true} />
              </div>
            </>
          )}
        </div>
      )
}