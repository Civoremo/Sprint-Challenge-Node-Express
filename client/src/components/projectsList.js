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
    height: 200px;
    margin: 20px 20px;
    /* border-radius: 20px; */
    padding: 10px 10px;
`;

const ProjectTitle = styled.div`
    margin: 20px 0;
    padding-bottom: 5px;
    border-bottom: 1px solid lightgray;
    font-weight: bold;
`;

const ProjectDescription = styled.div`
    margin-bottom: 10px;
    height: 70px;
    border-left: 2px solid gray;
    border-right: 2px solid gray;
    border-radius: 10px;
    padding: 10px 10px;
    background-color: rgb(230, 230, 230);
    /* border: 1px solid blue; */
`;

const Button = styled.button`

    :hover {
        cursor: pointer;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
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
                            <ProjectDescription>
                                {project.description}
                            </ProjectDescription>
                            <ButtonContainer>
                                <Button>view</Button>
                                <Button>complete</Button>
                                <Button>edit</Button>
                                <Button>remove</Button>
                            </ButtonContainer>
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