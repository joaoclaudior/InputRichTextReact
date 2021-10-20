import React from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

class RichText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty()
        };
        this.props.onChange(
            convertToRaw(this.state.editorState.getCurrentContent())
        );
    }
    onChange = editorState => {
        this.setState({
            editorState
        });

        const { onChange, value } = this.props;
    
        const newValue =
          convertToRaw(editorState.getCurrentContent());
    
        if (value !== newValue) {
          onChange(newValue);
        }
    
        this.setState({
          editorState
        });
    };

    convertToRaw = () => {
        this.setState({ convertedContent: convertToRaw(this.state.editorState.getCurrentContent()) });
    }

    render() {
        const { heigth, width } = this.props;
        return (
            <div>
                <div>
                    <Editor
                        editorState={this.state.editorState}
                        onEditorStateChange={this.onChange}
                        editorStyle={{ border: "1px solid #F1F1F1", height: heigth, width: width}}
                        toolbar={{
                            options: ['inline', 'link'],
                            inline: { 
                              inDropdown: true,
                              options: ["bold", "italic", "underline"]
                            },
                            link: { inDropdown: true },
                          }}
                    />
                </div>
            </div>
        );
    }
}

export default RichText;
