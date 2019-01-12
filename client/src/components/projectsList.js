import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProjects } from '../store/actions';
import styled from 'styled-components';

// styled-components
const MainContainer = styled.div`
    width: 800px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const ProjectContainer = styled.div`
    border: 1px solid lightgray;
    width: 300px;
    height: 150px;
    margin: 20px 20px;
    border-radius: 20px;
    padding: 10px 10px;
`;

const ProjectTitle = styled.div`
    margin: 20px 0;
    padding-bottom: 5px;
    border-bottom: 1px solid lightgray;
`;

class projectsList extends Component {
    constructor() {
        super();
        this.state = {}
    }

    componentDidMount() {
        this.props.fetchProjects();
    }

    render () {
        return (
            <MainContainer>
                {this.props.projects.map(project => {
                    return (
                        <ProjectContainer key={project.id}>
                            <ProjectTitle>
                                {project.name}
                            </ProjectTitle>
                            <div>
                                {project.description}
                            </div>
                        </ProjectContainer>
                    );
                })}
            </MainContainer>
        );
    }
}

const mapStateToProps = state => {
    return {
        projects: state.projects,
    };
}

export default connect(
    mapStateToProps,
    { fetchProjects }
) (projectsList);