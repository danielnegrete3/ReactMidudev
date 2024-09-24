import{jsx as _jsx}from"react/jsx-runtime";import{useState,useEffect,Children}from"react";import{match}from"path-to-regexp";import{EVENTS}from"../Utils/constants";import getCurrentPath from"../Utils/getCurrentPath";export default function Router({children,routes=[],defaultRoute:DefaultRoute=()=>/*#__PURE__*/_jsx("h1",{children:" Error, 404 "})}){const[currentPath,setCurrentPath]=useState(getCurrentPath());useEffect(()=>{const getNewPath=()=>{setCurrentPath(getCurrentPath())};window.addEventListener(EVENTS.PUSHSTATE,getNewPath);window.addEventListener(EVENTS.POPSTATE,getNewPath);return()=>{window.removeEventListener(EVENTS.PUSHSTATE,getNewPath);window.removeEventListener(EVENTS.POPSTATE,getNewPath)}},[]);const routesPages=Children.map(children,({type,props})=>{const{name}=type;const isRoute=name==="Route";return isRoute?props:null});const allRoutes=routes.concat(routesPages).filter(Boolean);let routeParams={};const Page=allRoutes.find(({Path})=>{if(currentPath===Path)return true;const matchUrl=match(Path,{decode:decodeURIComponent});const matched=matchUrl(currentPath);if(!matched)return false;routeParams=matched.params;return true})?.Component;return Page?/*#__PURE__*/_jsx(Page,{routeParams:routeParams}):/*#__PURE__*/_jsx(DefaultRoute,{routeParams:routeParams})}