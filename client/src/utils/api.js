import { gql } from "@apollo/client";





export const GET_ALL_MATCHUPS = gql`
query GET_MATCHUP_LIST {
  getMatchupList {
    _id
    tech1
    tech2
  }
}
`;



export const createMatchup = (matchupData) => {
  return fetch('/api/matchup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(matchupData),
  });
};

export const getMatchup = (matchupId) => {
  return fetch(`/api/matchup/${matchupId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const createVote = (voteData) => {
  return fetch(`/api/matchup/${voteData}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(voteData),
  });
};

export const getAllTech = () => {
  return fetch('/api/tech', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
