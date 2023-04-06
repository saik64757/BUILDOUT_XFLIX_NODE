import "./Videoplayerpage.css";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import Typography from "@mui/material/Typography";
import CircleIcon from "@mui/icons-material/Circle";
import { formatDate, getdiff } from "./DashboardCard";
import axios from "axios";
import { useParams } from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';

function Videoplayerview({ video }) {

  async function updatevotecount(vote, id) {
    let url = `https://0cec8d3e-3ef8-4bcd-bf50-5f0816d927e4.mock.pstmn.io/v1/videos/${id}/votes`;
    try {
      let response = axios.patch(url, {
        vote: vote,
        change: "increase",
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function updateViewCount(id) {
    console.log(id);
    let url = `https://0cec8d3e-3ef8-4bcd-bf50-5f0816d927e4.mock.pstmn.io/v1/videos/${id}/views`;
    try {
      let response = axios.patch(url);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (video._id) {
      updateViewCount(video._id);
    }
  }, [video])

  
  return (
    <>
      <Box
        sx={{
          display: "flex",
          bgcolor: "transparent",
          height: "0",
          justifyContent: "center",
          position: "relative",
          pb: "56.25%",
          pt: "25px",
          mx: "40px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            p: 5,
            position: "absolute",
            top: "0",
            left: "0",
          }}
        >
          {" "}
          <iframe
            title="W3Schools Free Online Web Tutorials"
            src={`https://${video.videoLink}`}
            width="100%"
            height="100%"
            className="iframe-main"
          ></iframe>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              py: 2,
              borderBottom: 1,
              borderColor: "primary.main",
            }}
          >
            <Box>
              <Typography variant="h5" component="h5" sx={{ color: "white" }}>
                {video.title}
              </Typography>
              <Box sx={{ display: "flex", color: "white", opacity: 0.4 }}>
                <Typography variant="h6" gutterBottom sx={{ pr: 2 }}>
                  <span >{video.viewCount}</span> views
                </Typography>
                <Typography variant="h6" gutterBottom sx={{ pr: 2 , display:"flex",alignItems: 'center', flexDirection: 'row' }} >
                  <Box sx={{mx:1 ,mb:"3px"}}><CircleIcon sx={{ fontSize: "small" }} /></Box>
                  <Box>{video.genre}</Box>
                </Typography>
                <Typography variant="h6" gutterBottom sx={{ pr: 2 , display:"flex",alignItems: 'center', flexDirection: 'row' }}>
                <Box sx={{mx:1 ,mb:"3px"}}><CircleIcon sx={{ fontSize: "small" }} /></Box>
                <Box>{getdiff(video.releaseDate)}</Box>
                </Typography>
              </Box>
            </Box>
            <Box>
              <Button
                style={{ textTransform: "none" }}
                size="medium"
                sx={{ color: "white", mx: 1 }}
                variant="contained"
                onClick={(e) => updatevotecount("upVote", video._id)}
                >
                <ThumbUpIcon sx={{ fontSize: "medium",mr:"6px" }} />
                {/* {video.votes.upVotes} */}
                {video.votes ? video["votes"]["upVotes"] : null}
              </Button>
              <Button
                style={{ textTransform: "none" }}
                size="medium"
                sx={{ color: "white", mx: 1 }}
                variant="contained"
                onClick={(e) => updatevotecount("downVote", video._id)}
              >
                <ThumbDownIcon sx={{ fontSize: "medium" ,mr:"6px" }} />
                {/* {video.votes.downVotes} */}
                {video.votes ? video["votes"]["downVotes"] : null}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Videoplayerview;
