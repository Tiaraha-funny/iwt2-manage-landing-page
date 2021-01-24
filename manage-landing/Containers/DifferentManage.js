import React from "react";
import DifferentManage from "../components/DiffentManage";
import { Container } from "../components/DiffentManage/styles/DifferentManage";

export default function DifferentManageContainer() {
  return (
    <Container>
      <DifferentManage.Cover>
        <DifferentManage.Title>
          What's different about manage
        </DifferentManage.Title>
        <DifferentManage.Description>
          Manage provides all the functionality your team need, without
          complexity. Our software is tailor-made for modern digital products
          teams.
        </DifferentManage.Description>
      </DifferentManage.Cover>
      <DifferentManage.Lists>
        <DifferentManage.Items>
          <DifferentManage.SubCover>
            <DifferentManage.Button>01</DifferentManage.Button>
            <DifferentManage.SubTitle>
              Track company-wide progress
            </DifferentManage.SubTitle>
          </DifferentManage.SubCover>
          <DifferentManage.Description>
            See how your day-to-day tasks fit into the wider vision. Go from
            tracking progressat the milestone leve all the way done to the
            smallest of details. Never lose sight of the bigger picture again.
          </DifferentManage.Description>
        </DifferentManage.Items>

        <DifferentManage.Items>
          <DifferentManage.SubCover>
            <DifferentManage.Button>02</DifferentManage.Button>
            <DifferentManage.SubTitle>
              Advanced built-in reports
            </DifferentManage.SubTitle>
          </DifferentManage.SubCover>
          <DifferentManage.Description>
            Set internal delivery estimates and track progress towards company
            goals. Our constomisable dashboardhelps you build out the reports
            you need to keep key stakeholder informed.
          </DifferentManage.Description>
        </DifferentManage.Items>

        <DifferentManage.Items>
          <DifferentManage.SubCover>
            <DifferentManage.Button>03</DifferentManage.Button>
            <DifferentManage.SubTitle>
              Everything you need in one place
            </DifferentManage.SubTitle>
          </DifferentManage.SubCover>
          <DifferentManage.Description>
            Stop jumping from one service to another to comminucate, store file,
            strack tasks and share documents Manage offers an all-in-one team
            productivity solution.
          </DifferentManage.Description>
        </DifferentManage.Items>
      </DifferentManage.Lists>
    </Container>
  );
}
