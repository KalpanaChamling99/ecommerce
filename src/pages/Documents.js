import React,{useEffect,useState} from 'react';
import {withRouter,Link} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import { Collapse } from 'antd';
import { getDocuments } from '../actions/thunk/documentPageThunk';
import Loader from '../components/common/Loader'
const { Panel } = Collapse;

const DocumentPage = () =>{
    const dispatch = useDispatch(); 
    const [documentsCategory,setDocumentsCategory] = useState();
    const { documentsList: {documents},loader:{isLoading} } = useSelector((state)=>state);

    useEffect(()=>{
        dispatch(getDocuments());
    },[dispatch]);

    useEffect(()=>{
        let docCategory = documents?.map(item => item.document_category);
        setDocumentsCategory(docCategory?.filter((item,i)=>docCategory.indexOf(item)=== i));
    },[documents]);
    return(
        <section className="faq-section nant-main-section-padding faq-bg">
            <div className="container">
                {isLoading ? <Loader /> :
                <div className="row">
                    {documentsCategory?.map((docCategory)=>(
                        <div className="col-lg-6">
                            <div className="faq-content">
                                <h2>{docCategory}</h2>
                                <div className="faq-accordion">
                                    <Collapse accordion>
                                    {documents.filter(doc=>`${doc?.document_category}` === docCategory).map(items=>(
                                        <Panel header={items?.title} key={items?.doc_id} className="nant-accordion-card">
                                            <Link className="nant-downlaod-btn" to={{pathname:items?.docs}} target="_blank" download>Download</Link>
                                        </Panel>
                                    ))}
                                    </Collapse>
                                </div>
                            </div>
                        </div>
                    ))}
                    
                </div>
                }
            </div>
        </section>
    );
};
export default withRouter(DocumentPage);