import { Container, Title, Date, Hour, Content, Divider, SubContainer, SubContent} from './styles';
import { TouchableOpacityProps, Text } from "react-native";
import { Ball } from '@components/Ball';
import { useState } from 'react';

type Props = TouchableOpacityProps & {
    date?: string;
    hour?: string;
    title?: string;      
    mealsGroup: Group
}

type Group = {
    id: number,
    data : string
    refeicoes: MealsItens[]
}

type MealsItens = {                                
    hora: string;
    description: string;
           
}

export function MealList({date, hour, title, mealsGroup }: Props ){
    return(
        <Container>

            <Date>
                {mealsGroup.data}
            </Date>

            {mealsGroup.refeicoes.map((item: MealsItens) => {
                return (
                    <SubContainer>                
                        <Content>
                            <SubContent>
                                <Hour>
                                    {item.hora}
                                </Hour>
                                <Divider>
                                    |
                                </Divider>
                                <Title>
                                    {item.description}
                                </Title>
                            </SubContent>                    

                            <Ball/>
                            
                        </Content> 

                    </SubContainer>
                )
            })}    

        </Container>
    );
}