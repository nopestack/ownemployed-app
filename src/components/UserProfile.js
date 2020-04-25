import * as React from 'react'
import {Avatar, Card, Col, List, Row,     Descriptions, Button} from 'antd'
import PageLayout from './PageLayout'
import profiles from '../data/users.json'
import businesses from '../data/businesses.json'

import {useParams} from "react-router";
import TagsCard from "./TagsCard";
const {Meta} = Card;

const UserProfile = () => {

    const {userProfileId} = useParams()
    let profile = profiles[userProfileId];

    return (<PageLayout>
            <div style={{textAlign: 'center'}}>
                <Row gutter={4}>
                    <Col span={12}>

                        <Card>
                            <Descriptions title="User Info" column={1}>
                                <Descriptions.Item label="Location">{profile.location}</Descriptions.Item>
                                <Descriptions.Item label="Summary">{profile.summary}</Descriptions.Item>
                                <Descriptions.Item label="Education">{profile.education}</Descriptions.Item>
                            </Descriptions>,
                        </Card>

                        <TagsCard
                            title="Seeking"
                            tags={profile.lookingFor}
                        />
                        <TagsCard
                            title="Skills"
                            tags={profile.skills}
                        />
                        <TagsCard
                            title="Interests"
                            tags={profile.interests}
                        />

                    </Col>
                    <Col span={12}>
                        <Card
                            cover={<img alt={profile.name} src={`/imgs/users/${userProfileId}.png`}/>}>
                            <Meta title={profile.name} description={profile.summary}/>
                        </Card>

                        <Row gutter={4}>
                            {Object.keys(profile.socialMedia).map(k =>
                                <Col span={4}>
                                    <a href={profile.socialMedia[k]}>
                                        <img alt={k} src={`/imgs/social-media/${k}.svg`}/></a>
                                </Col>
                            )}

                        </Row>

                        <Card>
                            <List
                                header={<div>Deborah's founding</div>}
                                itemLayout="horizontal"
                                dataSource={profile.ownedModels}
                                renderItem={ownedModel => {
                                    const item = businesses[ownedModel]
                                    return <List.Item>
                                        <List.Item.Meta
                                            avatar={<Avatar
                                                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
                                            title={<a href="/business-profile">{item.name}</a>}

                                        />
                                    </List.Item>}}
                            />
                        </Card>
                        <Card>
                            <List
                                header={<div>Deborah's connected to</div>}
                                itemLayout="horizontal"
                                dataSource={profile.connectedModels}
                                renderItem={connectedModel => {
                                    const item = businesses[connectedModel]
                                    return <List.Item>
                                        <List.Item.Meta
                                            avatar={<Avatar
                                                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
                                            title={<a href="/business-profile">{item.name}</a>}
                                            description={item.summary}
                                        />
                                    </List.Item>
                                }}
                            />
                        </Card>
                        <Card>
                            <Button>Connect</Button>
                        </Card>



                    </Col>

                </Row>


            </div>
        </PageLayout>
    )
}

export default UserProfile