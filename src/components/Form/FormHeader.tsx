import * as s from './StyledForm';

interface ParamProps {
    title: string;
    required?: boolean;
    hint?: JSX.Element;
}

export default function FormHeader({ title, required, hint }: ParamProps) {
    return (
        <s.FormHeader>
            <s.FormTitleBullet />
            <s.FormTitle>
                <s.FormTitleTypo>
                    {title}
                    {required ? <s.FormRequired>*</s.FormRequired> : ''}
                </s.FormTitleTypo>
                {hint}
            </s.FormTitle>
        </s.FormHeader>
    );
}
