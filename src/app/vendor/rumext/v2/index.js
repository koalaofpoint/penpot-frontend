// Vendor shim for rumext v2 (React bindings)
// This is a stub matching the ClojureScript rumext library API

import * as React from 'react';

export function component(name, options = {}, renderFn) {
  const { wrap = [] } = options;

  let WrappedComponent = (props) => {
    return React.createElement(renderFn, props);
  };

  // Apply wrappers (like memo)
  for (const wrapper of wrap) {
    WrappedComponent = wrapper(WrappedComponent);
  }

  WrappedComponent.displayName = name;
  return WrappedComponent;
}

export function memo(Component) {
  return React.memo(Component);
}

export function useDeref(value) {
  return value.current;
}

export function createPortal(children, container) {
  return React.createPortal(children, container);
}

export function createContext(defaultValue) {
  return React.createContext(defaultValue);
}

export function useContext(Context) {
  return React.useContext(Context);
}

export function useEffect(fn, deps) {
  return React.useEffect(fn, deps);
}

export function useState(initial) {
  return React.useState(initial);
}

export function useMemo(fn, deps) {
  return React.useMemo(fn, deps);
}

export function useCallback(fn, deps) {
  return React.useCallback(fn, deps);
}

export function useRef(initial) {
  return React.useRef(initial);
}

export function forwardRef(render) {
  return React.forwardRef(render);
}

export default {
  component,
  memo,
  useDeref,
  createPortal,
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
  useCallback,
  useRef,
  forwardRef,
};
