import * as React from 'react'
import { Card, Col, Row,    Descriptions, Button} from 'antd'
import PageLayout from './PageLayout'
import profiles from '../data/users.json'
import businesses from '../data/businesses.json'

import {useParams} from "react-router";
import TagsCard from "./TagsCard";
import BusinessCard from "./BusinessCard";
import PageIntro from "./PageIntro";

const UserProfile = () => {

    const {userProfileId} = useParams()
    let user = profiles[userProfileId];
    let image = require('../static/imgs/users/default.png')
    try {
        image = require(`../static/imgs/users/${user.id}.png`)
    } catch (e) {}

    return (
        <PageLayout>
            <PageIntro
                title={user.name}
                summary={user.summary}
                actions={[{ text: "Connect", onClick: () => {}}]}
                />
            <div>
                <Row gutter={4}>
                    <Col span={12}>
                        <Card
                            cover={<img alt='member' src={image}/>}
                                >
                            <Descriptions  column={1}>
                                <Descriptions.Item label="Location">{user.location}</Descriptions.Item>
                                <Descriptions.Item label="Education">{user.education}</Descriptions.Item>
                            </Descriptions>
                        </Card>
                        <Row gutter={4}>
                            {Object.keys(user.socialMedia).map(k =>
                                <Col span={4}>
                                    <Card>
                                    <a href={user.socialMedia[k]}>
                                        <img alt={k} src={`/imgs/social-media/${k}.svg`}/></a>
                                    </Card>
                                </Col>
                            )}

                        </Row>


                    </Col>
                    <Col span={12}>
                        <TagsCard
                            title="Seeking"
                            tags={user.lookingFor}
                        />
                        <TagsCard
                            title="Skills"
                            tags={user.skills}
                        />
                        <TagsCard
                            title="Interests"
                            tags={user.interests}
                        />

                        <Card title="Founding">
                            {user.ownedModels.map(businessId => businesses[businessId]).map((business) => (<BusinessCard business={business}/>))}
                        </Card>
                        <Card title="Connected">
                            {user.connectedModels.map(businessId => businesses[businessId]).map((business) => (<BusinessCard business={business}/>))}
                        </Card>
                    </Col>
                </Row>
            </div>
        </PageLayout>
    )
}

export default UserProfile