# React Router v6 Query Parameter Issue

This repository demonstrates a subtle bug in React Router v6 related to how it handles route changes when only query parameters are modified.  The issue is that the component may not re-render when only the query parameters change, leading to unexpected behavior in applications that rely on query parameters to update state.

## Bug Description

The provided code uses React Router v6. When navigating between routes with differing query parameters (e.g., `/search?q=apple` and `/search?q=banana`), the component does not reliably re-render.  This can lead to stale data being displayed in the component.

## Solution

The solution involves leveraging the `useSearchParams` hook from React Router to track query parameter changes. This hook provides a way to directly access and update query parameters, ensuring that the component re-renders whenever they change.